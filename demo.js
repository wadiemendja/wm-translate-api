const { translate } = require('./translate');

/*  

    The translate function takes 3 arguments:
    1) a string that you wanna translate
    2) the lang of that last string
    3) the lang that you wanna translate it to

*/

const txt = "Hello Wadie"; // example
const sl = "en"; // english
const tl = "fr"; // french

// translating txt from english to french
(async () => {
    const result = await translate(txt, sl, tl);
    console.log(result);
})();

/*

    ar = arabic , en = english , fr = french ...
    languages coeds => https://bit.ly/langCodes

*/