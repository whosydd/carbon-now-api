const chromium = require('chrome-aws-lambda')

module.exports = async url => {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  })
  try {
    const page = await browser.newPage()

    await page.goto(url)

    await page.$eval('#export-menu', el => el.click())

    await page.waitForSelector('div.export-menu-container > div.popout > div:nth-child(4) > button')
    await Promise.all([
      page.waitForNavigation(),
      page.$eval('div.export-menu-container > div.popout > div:nth-child(4) > button', el =>
        el.click()
      ),
    ])
    await page.evaluate('window.location.href')
    page.$eval('body', el => {
      el.style.background = 'none'
    })
    const img = await page.screenshot({
      omitBackground: true,
    })
    return Promise.resolve(img)
  } catch (error) {
    return Promise.reject(error)
  } finally {
    await browser.close()
  }
}
