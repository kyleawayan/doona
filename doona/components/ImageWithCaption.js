import { AWSServerlessImageHandlerImage } from 'nextra-theme-blog'

const ImageWithCaption = ({ src, alt, caption, sizes, priority }) => {
  if (caption) {
    return (
      <figure>
        <AWSServerlessImageHandlerImage
          src={src}
          alt={alt}
          sizes={sizes}
          priority={priority}
        />
        <figcaption>{caption}</figcaption>
      </figure>
    )
  }
  return (
    <AWSServerlessImageHandlerImage
      src={src}
      alt={alt}
      sizes={sizes}
      priority={priority}
    />
  )
}

export default ImageWithCaption
