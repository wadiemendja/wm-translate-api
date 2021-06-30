const puppeteer = require('puppeteer');

async function translate(text, sl, tl) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const GT = 'https://translate.google.com/?sl=' + sl + '&tl=' + tl + '&text=' + text + '&op=translate';
    try {
        await page.goto(GT, { waitUntil: 'networkidle2' });
        const output = await page.evaluate(() => {
            const sel = document.querySelector('#yDmH0d > c-wiz > div > div.WFnNle > c-wiz > div.OlSOob > c-wiz > div.ccvoYb > div.AxqVh > div.OPPzxe > c-wiz.P6w8m.BDJ8fb.nzsIKe > div.dePhmb > div > div.J0lOec');
            return sel.innerText;
        });
        await browser.close();
        console.log(output);
        return output;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { translate };