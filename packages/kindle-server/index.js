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


// 截图
router.get('/screenshot', async (ctx) => {
	try {
		// 截图并保存
		await captureScreenshot(TARGET_URL, SCREENSHOT_PATH);

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

// 静态文件服务
app.use(serve(path.join(__dirname, 'weather')));
// 路由
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(PORT, () => {
	console.log('服务器已启动，访问 http://localhost:3000');
});
