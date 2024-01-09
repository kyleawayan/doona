import puppeteer from 'puppeteer'

const resumeUrl = 'http://localhost:3000/resume'

;(async () => {
  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()
  await page.goto(resumeUrl, { waitUntil: 'networkidle2' })
  await page.pdf({
    path: './public/Kyle Awayan Resume.pdf',
    format: 'letter',
    margin: {
      top: '1cm',
      right: '1cm',
      bottom: '1cm',
      left: '1cm'
    },
    tagged: true
  })

  await browser.close()
})()
