import { AWSServerlessImageHandlerImage } from 'nextra-theme-blog'

const ImageWithCaption = ({ src, alt, caption }) => {
  if (caption) {
    return (
      <figure>
        <AWSServerlessImageHandlerImage src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    )
  }
  return <AWSServerlessImageHandlerImage src={src} alt={alt} />
}

export default ImageWithCaption
