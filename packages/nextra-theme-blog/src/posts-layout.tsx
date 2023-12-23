import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ReactElement, ReactNode } from 'react'
import { AWSServerlessImageHandlerImage } from './AWSServerlessImageHandlerImage'
import { BasicLayout } from './basic-layout'
import { useBlogContext } from './blog-context'
import { MDXTheme } from './mdx-theme'
import Nav from './nav'
import { collectPostsAndNavs } from './utils/collect'
import getTags from './utils/get-tags'

export function PostsLayout({
  children
}: {
  children: ReactNode
}): ReactElement {
  const { config, opts } = useBlogContext()
  const { posts } = collectPostsAndNavs({ config, opts })
  const router = useRouter()
  const { type } = opts.frontMatter
  const tagName = type === 'tag' ? router.query.tag : null

  const postList = posts.map(post => {
    if (tagName) {
      const tags = getTags(post)
      if (!Array.isArray(tagName) && !tags.includes(tagName)) {
        return null
      }
    } else if (type === 'tag') {
      return null
    }

    const postTitle = post.frontMatter?.title || post.name
    const description = post.frontMatter?.description
    const coverKey = post.frontMatter?.coverKey
    const coverAlt = post.frontMatter?.coverAlt
    const directLink = post.frontMatter?.directLink

    if (directLink) {
      return (
        <div key={post.route} className="post-item">
          <a href={directLink}>
            <div className="nx-not-prose nx-w-full nx-aspect-square nx-bg-gray-400">
              {coverKey && (
                <AWSServerlessImageHandlerImage
                  src={coverKey}
                  alt={coverAlt}
                  square
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                />
              )}
            </div>
          </a>
          <h3 className="!nx-mb-1 !nx-mt-3">
            <a href={directLink} className="!nx-no-underline">
              {postTitle}
            </a>
          </h3>
          {description && (
            <p className="nx-mb-2 dark:nx-text-gray-400 nx-text-gray-600">
              {description}
              {config.readMore && (
                <a href={directLink} className="post-item-more nx-ml-2">
                  External Link →
                </a>
              )}
            </p>
          )}
        </div>
      )
    }

    return (
      <div key={post.route} className="post-item">
        <Link href={post.route} passHref legacyBehavior>
          <a>
            <div className="nx-not-prose nx-w-full nx-aspect-square nx-bg-gray-400">
              {coverKey && (
                <AWSServerlessImageHandlerImage
                  src={coverKey}
                  alt={coverAlt}
                  square
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                />
              )}
            </div>
          </a>
        </Link>
        <h3 className="!nx-mb-1 !nx-mt-3">
          <Link href={post.route} passHref legacyBehavior>
            <a className="!nx-no-underline">{postTitle}</a>
          </Link>
        </h3>
        {description && (
          <p className="nx-mb-2 dark:nx-text-gray-400 nx-text-gray-600">
            {description}
            {config.readMore && (
              <Link href={post.route} passHref legacyBehavior>
                <a className="post-item-more nx-ml-2">{config.readMore}</a>
              </Link>
            )}
          </p>
        )}
      </div>
    )
  })
  return (
    <BasicLayout>
      <Nav />
      <MDXTheme>{children}</MDXTheme>
      <div className="nx-grid nx-grid-cols-2 nx-gap-5">{postList}</div>
    </BasicLayout>
  )
}
