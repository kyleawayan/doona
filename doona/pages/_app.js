import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import localFont from 'next/font/local'

const inter = localFont({
  src: [
    { path: '../fonts/InterVariable.woff2', style: 'normal' },
    { path: '../fonts/InterVariable-Italic.woff2', style: 'italic' }
  ],
  weight: '100 900',
  display: 'swap',
  variable: '--font-inter'
})

const iosevka = localFont({
  src: [
    { path: '../fonts/iosevka-regular.woff2', style: 'normal' },
    { path: '../fonts/iosevka-semibold.woff2', style: 'normal', weight: '600' }
  ],
  display: 'swap',
  variable: '--font-iosevka'
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${iosevka.variable}`}>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </main>
  )
}
