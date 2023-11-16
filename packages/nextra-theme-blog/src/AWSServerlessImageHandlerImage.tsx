import { Buffer } from 'buffer'
import Image from 'next/image'
import { useBlogContext } from './blog-context'

// https://docs.aws.amazon.com/solutions/latest/serverless-image-handler/create-and-use-image-requests.html

function createImageRequest(
  bucketName: string,
  apiEndpoint: string,
  key: string,
  edits?: Record<string, any>
) {
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

function parseEverCdnKeyAndGetImgDim(ref: string) {
  const match = ref.match(/(\d+)x(\d+)/)

  if (match && match.length === 3) {
    const width = parseInt(match[1])
    const height = parseInt(match[2])
    return { width, height }
  }

  return { width: 0, height: 0 }
}

export type ServerlessImageHandlerImageProps = {
  src: string
  alt: string
  square?: boolean
  sizes?: string
}

export function AWSServerlessImageHandlerImage({
  src,
  alt,
  square,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}: ServerlessImageHandlerImageProps) {
  const { config } = useBlogContext()
  const { width } = parseEverCdnKeyAndGetImgDim(src)
  let { height } = parseEverCdnKeyAndGetImgDim(src)

  const bucketName = config.awsServerlessImageHandlerConfig?.bucketName
  const apiEndpoint = config.awsServerlessImageHandlerConfig?.apiEndpoint

  if (!apiEndpoint || !bucketName) {
    throw new Error(
      'Missing required config for awsServerlessImageHandlerConfig'
    )
  }

  if (src.endsWith('.gif')) {
    src = createImageRequest(bucketName, apiEndpoint, src)
  } else if (square) {
    src = createImageRequest(bucketName, apiEndpoint, src, {
      resize: {
        width,
        height: width,
        fit: 'cover'
      }
    })
    height = width
  } else {
    src = createImageRequest(bucketName, apiEndpoint, src, {
      resize: {
        width
      }
    })
  }

  return (
    <Image src={src} alt={alt} sizes={sizes} width={width} height={height} />
  )
}
