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
    // Use fontVariationSettings to set font weight
    // instead of font-weight
    fontWeight: {
      thin: {
        css: {
          fontVariationSettings: "'wght' 100",
          fontWeight: 400
        }
      },
      normal: {
        css: {
          fontVariationSettings: "'wght' 400",
          fontWeight: 400
        }
      },
      medium: {
        css: {
          fontVariationSettings: "'wght' 500",
          fontWeight: 400
        }
      },
      semibold: {
        css: {
          fontVariationSettings: "'wght' 600",
          fontWeight: 400
        }
      },
      bold: {
        css: {
          fontVariationSettings: "'wght' 700",
          fontWeight: 400
        }
      },
      extrabold: {
        css: {
          fontVariationSettings: "'wght' 800",
          fontWeight: 400
        }
      },
      black: {
        css: {
          fontVariationSettings: "'wght' 900",
          fontWeight: 400
        }
      }
    },
    extend: {
      colors: docsConfig.theme.extend.colors,
      fontFamily: {
        sans: [
          'var(--font-inter)',
          {
            fontVariationSettings: '"opsz" 32'
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
            '--tw-prose-hr': theme('colors.black'),
            '--tw-prose-quotes': theme('colors.black'),
            '--tw-prose-quote-borders': theme('colors.black'),
            '--tw-prose-captions': theme('colors.black'),
            '--tw-prose-code': theme('colors.black'),
            '--tw-prose-pre-code': theme('colors.white'),
            '--tw-prose-pre-bg': theme('colors.black'),
            '--tw-prose-th-borders': theme('colors.black'),
            '--tw-prose-td-borders': theme('colors.black'),
            '--tw-prose-invert-body': theme('colors.white'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.white'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.white'),
            '--tw-prose-invert-bullets': theme('colors.white'),
            '--tw-prose-invert-hr': theme('colors.white'),
            '--tw-prose-invert-quotes': theme('colors.white'),
            '--tw-prose-invert-quote-borders': theme('colors.white'),
            '--tw-prose-invert-captions': theme('colors.white'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.black'),
            '--tw-prose-invert-pre-bg': theme('colors.white'),
            '--tw-prose-invert-th-borders': theme('colors.white'),
            '--tw-prose-invert-td-borders': theme('colors.white'),
            h1: {
              fontVariationSettings: "'wght' 600",
              fontWeight: 400
            },
            h2: {
              fontVariationSettings: "'wght' 500",
              fontWeight: 400
            },
            h3: {
              fontVariationSettings: "'wght' 600",
              fontWeight: 400
            },
            strong: {
              fontVariationSettings: "'wght' 600",
              fontWeight: 400
            },
            code: {
              fontVariationSettings: "'wght' 400",
              fontWeight: 400
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: docsConfig.darkMode
}
