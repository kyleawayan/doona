import { AWSServerlessImageHandlerImage } from 'nextra-theme-blog'

const ImageWithCaption = ({ src, alt, caption, sizes }) => {
  if (caption) {
    return (
      <figure>
        <AWSServerlessImageHandlerImage src={src} alt={alt} sizes={sizes} />
        <figcaption>{caption}</figcaption>
      </figure>
    )
  }
  return <AWSServerlessImageHandlerImage src={src} alt={alt} sizes={sizes} />
}

export default ImageWithCaption
