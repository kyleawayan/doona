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

function parseEverCdnKeyAndGetImgDim(ref: string, square?: boolean) {
  const match = ref.match(/(\d+)x(\d+)/)

  if (match && match.length === 3) {
    const width = parseInt(match[1])
    const height = parseInt(match[2])

    if (square) {
      return { width, height: width }
    }

    return { width, height }
  }

  return { width: 0, height: 0 }
}

const imageLoader = ({
  src,
  width,
  bucketName,
  apiEndpoint,
  square
}: {
  src: string
  width: number
  bucketName: string
  apiEndpoint: string
  square?: boolean
}) => {
  // If src ends with ".gif", return the original src
  // as making image modifications doesn't work right now
  if (src.endsWith('.gif'))
    return createImageRequest(bucketName, apiEndpoint, src)

  if (square) {
    return createImageRequest(bucketName, apiEndpoint, src, {
      resize: {
        width,
        height: width,
        fit: 'cover'
      }
    })
  }

  return createImageRequest(bucketName, apiEndpoint, src, {
    resize: {
      width
    }
  })
}

export function AWSServerlessImageEncodeUrl(src: string, width: number) {
  const { config } = useBlogContext()

  const bucketName = config.awsServerlessImageHandlerConfig?.bucketName
  const apiEndpoint = config.awsServerlessImageHandlerConfig?.apiEndpoint

  if (!apiEndpoint || !bucketName) {
    throw new Error(
      'Missing required config for awsServerlessImageHandlerConfig'
    )
  }

  return imageLoader({ src, width, bucketName, apiEndpoint })
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
  const { width, height } = parseEverCdnKeyAndGetImgDim(src, square)

  const bucketName = config.awsServerlessImageHandlerConfig?.bucketName
  const apiEndpoint = config.awsServerlessImageHandlerConfig?.apiEndpoint

  if (!apiEndpoint || !bucketName) {
    throw new Error(
      'Missing required config for awsServerlessImageHandlerConfig'
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      width={width}
      height={height}
      loader={p => imageLoader({ ...p, bucketName, apiEndpoint, square })}
    />
  )
}
