import { Buffer } from 'buffer'

const bucketName = 'kyleawayan-ever'
const apiEndpoint = 'https://d4fhu6c3mdrl9.cloudfront.net'
// https://docs.aws.amazon.com/solutions/latest/serverless-image-handler/create-and-use-image-requests.html

function createImageRequest(key, edits) {
  const imageRequest = {
    bucket: bucketName,
    key,
    edits
  }

  const stringifiedObject = JSON.stringify(imageRequest)

  const encodedObject = Buffer.from(stringifiedObject).toString('base64')

  const url = `${apiEndpoint}/${encodedObject}`

  return url
}

export default function myImageLoader({ src, width }) {
  // If src ends with ".gif", return the original src
  // as making image modifications doesn't work right now
  if (src.endsWith('.gif')) return createImageRequest(src)

  return createImageRequest(src, {
    resize: {
      width
    }
  })
}
