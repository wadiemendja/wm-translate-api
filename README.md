# wm-translate-api
 <h2> Make it work :</h2>
 
 1- You should have NodeJS installed in you machine
 2- Run the following command:
 
    npm install puppeteer
    
 3- Run the demo code:
 
    node demo.js
    
<h2> How it works :</h2>

    const { translate } = require('./translate');

  The translate function takes 3 arguments:
  1) a string that you wanna translate
  2) the lang of that last string
  3) the lang that you wanna translate it to

    const txt = "Hello Wadie"; // example
    const sl = "en"; // english
    const tl = "fr"; // french

  translating txt from english to french
  
    (async () => {
        const result = await translate(txt, sl, tl);
        console.log(result);
    })();

  ar = arabic , en = english , fr = french ...
  languages coeds => https://bit.ly/langCodes
