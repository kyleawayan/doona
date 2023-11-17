/* eslint sort-keys: error */
export default {
  awsServerlessImageHandlerConfig: {
    apiEndpoint: 'https://d4fhu6c3mdrl9.cloudfront.net',
    bucketName: 'kyleawayan-ever'
  },
  darkMode: true,
  dateFormatter: date => `Last updated at ${date.toDateString()}`,
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
