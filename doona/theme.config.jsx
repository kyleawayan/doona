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
    // eslint-disable-next-line sort-keys
    const options = { year: 'numeric', month: 'short', day: '2-digit' }
    return date.toLocaleDateString(undefined, options).replaceAll(',', '')
  },
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      {new Date().getFullYear()} © Kyle Awayan.
      <div className="footerLinks">
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

    const titleWithName = `${title} - Kyle Awayan`

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Kyle Awayan" />
        <meta property="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {title && <title>{titleWithName}</title>}
        {title && <meta property="og:title" content={titleWithName} />}
        {meta.description ? (
          <meta property="og:type" content="article" />
        ) : (
          <meta property="og:type" content="website" />
        )}
        {meta.description && (
          <meta name="description" content={meta.description} />
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
