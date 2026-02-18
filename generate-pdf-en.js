const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	});

	try {
		const page = await browser.newPage();
		
		// Получаем абсолютный путь к HTML файлу
		const htmlPath = path.join(__dirname, 'resume-pdf-en.html');
		const htmlUrl = `file://${htmlPath}`;
		
		await page.goto(htmlUrl, {
			waitUntil: 'networkidle0'
		});

		// Генерируем PDF
		await page.pdf({
			path: 'resume-mikhail-pryadun-en.pdf',
			format: 'A4',
			printBackground: true,
			margin: {
				top: '20mm',
				right: '20mm',
				bottom: '20mm',
				left: '20mm'
			}
		});

		console.log('✅ PDF successfully created: resume-mikhail-pryadun-en.pdf');
	} catch (error) {
		console.error('❌ Error creating PDF:', error);
		process.exit(1);
	} finally {
		await browser.close();
	}
}

generatePDF();


