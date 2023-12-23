import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { BasicLayout } from './basic-layout'
import { useBlogContext } from './blog-context'
import { MDXTheme } from './mdx-theme'
import Meta from './meta'

const RedirectLink = ({ directLink }: { directLink: string }) => {
  return (
    <>
      <p>
        Redirecting to <a href={directLink}>{directLink}</a>
      </p>
      <p>
        <a href={directLink}>Please click here if not redirected.</a>
      </p>
    </>
  )
}

export const ArticleLayout = ({ children }: { children: ReactNode }) => {
  const { config, opts } = useBlogContext()
  // directLink is an external link,
  // if it is set, redirect to it
  // @ts-ignore TODO: fix type in Nextra library
  const { directLink } = opts.frontMatter

  useEffect(() => {
    if (directLink) {
      // .replace() to not add to browser history
      window.location.replace(directLink)
    }
  }, [directLink])

  if (directLink) {
    return (
      <BasicLayout>
        <RedirectLink directLink={directLink} />
      </BasicLayout>
    )
  }

  return (
    <BasicLayout>
      <Meta />
      <MDXTheme>
        {children}
        {config.postFooter}
        {config.comments}
      </MDXTheme>
    </BasicLayout>
  )
}
