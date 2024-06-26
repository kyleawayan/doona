import puppeteer from 'puppeteer'

const resumeUrl = 'http://localhost:3000/resume'

;(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    // --no-sandbox bc Vercel gets error:
    // "Running as root without --no-sandbox is not supported"
    // Its OK because this only goes to my local dev website
    args: ['--no-sandbox']
  })
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
