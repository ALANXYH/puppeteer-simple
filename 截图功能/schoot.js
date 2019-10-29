const puppeteer = require('puppeteer');

(async () => {
    console.log('puppeteer launch success...');
    let www = 'news/19233/'
    www2 = www.replace(new RegExp('/',"gm"),'')
    var pic2 = (www2+'.jpg')
    console.log(pic2)
    const browser = await puppeteer.launch({
        executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium',
        headless: true,
        timeout: 0,
        ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();
    await page.goto('https://al.fg-games.co.jp/'+www, {timeout: 300000}).then(() => {
        console.log('跳转成功并且资源正确加载完毕.');
        // page.screenshot({path: 'news17006.jpg',fullPage: true});
        // console.log('截图成功.');
        // browser.close();
    }, () => {
        console.log('跳转成功, 资源加载超时.');
        // page.screenshot({path: 'news17006.jpg',fullPage: true});
        // browser.close();
        // console.log('截图成功.');
    });
    await page.screenshot({path: pic2,fullPage: true});
    console.log('截图成功.');
    await browser.close();
})();