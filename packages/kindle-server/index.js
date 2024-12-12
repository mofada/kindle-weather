const Koa = require('koa');
const Router = require('@koa/router');
const serve = require('koa-static');
const proxy = require('koa-proxies');
const fs = require('fs');
const path = require('path');
const {captureScreenshot, convertImage} = require('./util.js');

const PORT = process.env.PORT || 3000;
const SCREENSHOT_PATH = path.join(__dirname, 'screenshot.png');
const TARGET_URL = `http://localhost:${PORT}`;

const app = new Koa();
const router = new Router();

/**
 * 天气信息
 * @type {{sunrise: string, sunset: string, date:string}}
 */
const sunDataCache = {}

// 截图
router.get('/screenshot', async (ctx) => {
	const {key, location, city} = ctx.request.query;
	const queryString = new URLSearchParams({key, location, city}).toString();

	try {
		// 拼接 URL
		const targetUrl = `${TARGET_URL}?${queryString}`;
		// 截图并保存
		await captureScreenshot(targetUrl, SCREENSHOT_PATH);

		// 转换图片格式
		await convertImage(SCREENSHOT_PATH);

		// 读取文件并设置响应
		const screenshot = fs.readFileSync(SCREENSHOT_PATH);
		ctx.set('Content-Type', 'image/png');
		ctx.set('Content-Length', screenshot.length.toString());
		ctx.body = screenshot;
	} catch (error) {
		// 设置错误响应
		ctx.status = 500;
		ctx.body = {message: 'Internal Server Error', error: error.message};
		console.error('Error processing request:', error);
	}
})

// 天气
// 代理 /api/weather/now 到外部 API
app.use(
	proxy('/api/weather/now', {
		target: 'https://devapi.qweather.com/v7/weather/now',
		changeOrigin: true,
		rewrite: path => path.replace(/^\/api\/weather\/now/, ''),
		logs: true,
	})
);

// 代理 /api/weather/24h 到外部 API
app.use(
	proxy('/api/weather/24h', {
		target: 'https://devapi.qweather.com/v7/weather/24h',
		changeOrigin: true,
		rewrite: path => path.replace(/^\/api\/weather\/24h/, ''),
		logs: true,
	})
);

router.get('/api/today', async (ctx) => {
	// 获取日期 YYYY-MM-DD
	const todayDate = new Date().toISOString().split('T')[0];
	const {key, location} = ctx.request.query;

	// 如果没有缓存或者缓存的日期不是今天，则重新请求
	if (!sunDataCache.date || sunDataCache.date !== todayDate) {
		// 参数校验
		if (!key || !location) {
			ctx.body = {message: '参数 key 和 location 必填', code: 400};
			return;
		}

		try {
			// 发起网络请求获取数据
			const response = await fetch(
				`https://devapi.qweather.com//v7/weather/3d?location=${location}&key=${key}&lang=zh`
			);

			if (!response.ok) {
				ctx.body = {message: '请求天气数据失败', code: response.status};
				return;
			}

			const data = await response.json();

			const {daily, ...rest} = data;

			// 更新缓存
			Object.assign(sunDataCache, {today: daily?.[0]}, rest, {date: todayDate});
		} catch (error) {
			ctx.body = {message: `请求天气服务失败: ${error.message}`, code: 500};
			return;
		}
	}

	// 返回缓存数据
	ctx.body = {
		...sunDataCache,
		code: 200,
	};
})

// 静态文件服务
app.use(serve(path.join(__dirname, 'weather')));
// 路由
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(PORT, () => {
	console.log('服务器已启动，访问 http://localhost:3000');
});
