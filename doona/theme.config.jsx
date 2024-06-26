import { useRouter } from 'next/router'
import { AWSServerlessImageEncodeUrl } from 'nextra-theme-blog'

/* eslint sort-keys: error */
export default {
  awsServerlessImageHandlerConfig: {
    apiEndpoint: 'https://d4fhu6c3mdrl9.cloudfront.net',
    bucketName: 'kyleawayan-ever'
  },
  darkMode: false,
  dateFormatter: date => {
    const options = { month: 'long', year: 'numeric' }
    return date.toLocaleDateString(undefined, options)
  },
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      {new Date().getFullYear()} © Kyle Awayan.
      <div className="footerLinks">
        <a href="/resume" target="_blank" rel="noreferrer">
          Resume
        </a>
        {' · '}
        <a
          href="https://www.linkedin.com/in/kyleawayan/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        {' · '}
        <a
          href="https://github.com/kyleawayan"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {' · '}
        <a
          href="http://youtube.com/@kyleawayan"
          target="_blank"
          rel="noreferrer"
        >
          YouTube
        </a>
        {' · '}
        <a href="mailto:kyle@awayan.com" target="_blank" rel="noreferrer">
          kyle@awayan.com
        </a>
      </div>
      <style jsx>{`
        .footerLinks {
          float: right;
        }

        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  head: ({ title, meta }) => {
    const { asPath, defaultLocale, locale } = useRouter()

    const url =
      'https://kyleawayan.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    if (title === 'About') {
      title = 'Kyle Awayan'
    } else {
      title = `${title} - Kyle Awayan`
    }

    if (meta.type === 'resume') {
      title = 'Kyle Awayan Resume'
    }

    const useSummaryLargeImage = url !== 'https://kyleawayan.com/'

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Kyle Awayan" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {useSummaryLargeImage && (
          <meta property="twitter:card" content="summary_large_image" />
        )}
        {title && <title>{title}</title>}
        {title && <meta property="og:title" content={title} />}
        {meta.description ? (
          <meta property="og:type" content="article" />
        ) : (
          <meta property="og:type" content="website" />
        )}
        {meta.description && (
          <meta name="description" content={meta.description} />
        )}
        {meta.description && (
          <meta property="og:description" content={meta.description} />
        )}
        {meta.coverKey && (
          <meta
            property="og:image"
            content={AWSServerlessImageEncodeUrl(meta.coverKey, 800)}
          />
        )}
        {meta.coverAlt && (
          <meta property="og:image:alt" content={meta.coverAlt} />
        )}
      </>
    )
  }
}
