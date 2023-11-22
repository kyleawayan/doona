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
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
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
  )
}
