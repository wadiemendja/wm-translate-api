const puppeteer = require('puppeteer');

async function translate(textToTranslate, sl, tl) {

    const googleTranslateLimit = 5000 // characters
    if (textToTranslate.length > googleTranslateLimit) {
        const strings = cutString(textToTranslate, googleTranslateLimit); // table of 5000Char(limit) strings 
        let translations = [];
        for(let i= 0 ; i< strings.length ; i++)
            translations.push(await fetchTranslation(strings[i]));
        return translations.join('');    
    } else return await fetchTranslation(textToTranslate);

    async function fetchTranslation(text) {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        const GT = 'https://translate.google.com/?sl=' + sl + '&tl=' + tl + '&text=' + text + '&op=translate';
        try {
            await page.goto(GT, { waitUntil: 'networkidle0' });
            const output = await page.evaluate(() => {
                const sel = document.querySelector("#yDmH0d > c-wiz > div > div.WFnNle > c-wiz > div.OlSOob > c-wiz > div.ccvoYb > div.AxqVh > div.OPPzxe > c-wiz.P6w8m.BDJ8fb > div.dePhmb > div > div.J0lOec");
                return sel.innerText;
            });
            await browser.close();
            return output;
        } catch (error) {
            console.log(error);
        }
    }

}

function cutString(string, limit) {
    let strings = [];
    for (let i = 0; i < string.length; i += limit) {
        strings.push(string.substring(i, i + limit));
    }
    return strings;
}

module.exports = { translate };
