import Image from 'next/image'

function parseEverCdnKeyAndGetImgDim(ref) {
  const match = ref.match(/(\d+)x(\d+)/)

  if (match && match.length === 3) {
    const width = parseInt(match[1])
    const height = parseInt(match[2])
    return { width, height }
  }

  return { width: 0, height: 0 }
}

export default function EverCDNImage({ src, alt }) {
  let { width, height } = parseEverCdnKeyAndGetImgDim(src)

  return (
    <Image
      src={src}
      alt={alt}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      width={width}
      height={height}
    />
  )
}
