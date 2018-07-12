const puppeteer = require('puppeteer');

(async () => {
    console.log('puppeteer launch success...');
    let www = '在此填入网址的后半段，截图名字将以此命名'
    www2 = www.replace(new RegExp('/',"gm"),'')
    var pic2 = (www2+'.jpg')
    console.log(pic2)
    const browser = await puppeteer.launch({
        executablePath: '你的Chromium地址，eg：/Applications/Chromium.app/Contents/MacOS/Chromium',
        headless: true,
        timeout: 0,
        ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();
    await page.goto('想要截图的前半段网址'+www, {timeout: 300000}).then(() => {
        console.log('跳转成功并且资源正确加载完毕.');
        // page.screenshot({path: '自定义图片名字',fullPage: true});
        // console.log('截图成功.');
        // browser.close();
    }, () => {
        console.log('跳转成功, 资源加载超时.');
        // page.screenshot({path: '自定义图片名字',fullPage: true});
        // browser.close();
        // console.log('截图成功.');
    });
    await page.screenshot({path: pic2,fullPage: true});
    console.log('截图成功.');
    await browser.close();
})();
