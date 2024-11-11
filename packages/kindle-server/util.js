const puppeteer = require('puppeteer');
const {execFile} = require('child_process');

/**
 * 截图函数
 * @param url  {string} 截图网址
 * @param filename  {string} 截图文件名
 */
async function captureScreenshot(url, filename) {
	const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
	const page = await browser.newPage();

	// 设置视口大小
	await page.setViewport({width: 600, height: 800});
	// 旋转90度
	await page.evaluate(() => {
		document.body.style.transform = 'rotate(90deg)';
	});


	// 打开网页并截屏
	await page.goto(url);
	await page.waitForTimeout(1500)
	await page.screenshot({path: filename});

	await browser.close();
}

/**
 * 图片格式转换函数
 * @param filename {string} 图片文件名
 */
async function convertImage(filename) {
	return new Promise((resolve, reject) => {
		const args = [
			filename,
			'-gravity', 'center',
			'-extent', '600x800',
			'-colorspace', 'gray',
			'-depth', '8',
			filename
		];

		execFile('convert', args, (error, stdout, stderr) => {
			if (error) {
				console.error('Image conversion error:', {error, stdout, stderr});
				reject(new Error('Image conversion failed'));
			} else {
				resolve(filename);
			}
		});
	});
}

module.exports = {
	captureScreenshot,
	convertImage
};
