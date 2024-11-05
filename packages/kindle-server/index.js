const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const { captureScreenshot, convertImage } = require('./util.js');

const app = new Koa();
const PORT = process.env.PORT || 3000;
const SCREENSHOT_PATH = path.join(__dirname, 'screenshot.png');

// 处理请求
app.use(async (ctx) => {
	const targetUrl = 'https://www.qweather.com/weather/binjiang-101210114.html';

	try {
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
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
