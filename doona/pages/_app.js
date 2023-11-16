import localFont from 'next/font/local'

const inter = localFont({
  src: [
    { path: '../fonts/Inter.var.woff2', style: 'normal' },
    { path: '../fonts/Inter-Italic.var.woff2', style: 'italic' }
  ],
  display: 'swap',
  variable: '--font-inter'
})

const iosevka = localFont({
  src: [{ path: '../fonts/iosevka-regular.woff2', style: 'normal' }],
  display: 'swap',
  variable: '--font-iosevka'
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${iosevka.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
