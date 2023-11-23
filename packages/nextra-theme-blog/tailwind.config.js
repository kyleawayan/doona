const colors = require('tailwindcss/colors')
const docsConfig = require('../nextra-theme-docs/tailwind.config')

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: docsConfig.prefix,
  content: docsConfig.content,
  theme: {
    colors: {
      ...docsConfig.theme.colors,
      primary: colors.blue
    },
    extend: {
      colors: docsConfig.theme.extend.colors,
      fontFamily: {
        sans: [
          'var(--font-inter)',
          {
            fontVariationSettings: '"opsz" 32',
            fontOpticalSizing: 'auto'
          }
        ],
        mono: ['var(--font-iosevka)']
      },
      typography: theme => ({
        lesserafim: {
          css: {
            '--tw-prose-body': theme('colors.black'),
            '--tw-prose-headings': theme('colors.black'),
            '--tw-prose-lead': theme('colors.black'),
            '--tw-prose-links': theme('colors.black'),
            '--tw-prose-bold': theme('colors.black'),
            '--tw-prose-counters': theme('colors.black'),
            '--tw-prose-bullets': theme('colors.black'),
            '--tw-prose-quotes': theme('colors.black'),
            '--tw-prose-captions': theme('colors.black'),
            '--tw-prose-code': theme('colors.black'),
            '--tw-prose-pre-code': theme('colors.white'),
            '--tw-prose-pre-bg': theme('colors.black'),
            '--tw-prose-invert-body': theme('colors.white'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.white'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.white'),
            '--tw-prose-invert-bullets': theme('colors.white'),
            '--tw-prose-invert-quotes': theme('colors.white'),
            '--tw-prose-invert-captions': theme('colors.white'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.black'),
            '--tw-prose-invert-pre-bg': theme('colors.white'),
            h1: {
              fontWeight: 600
            },
            h2: {
              fontWeight: 500
            },
            h3: {
              fontWeight: 600
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: docsConfig.darkMode
}
