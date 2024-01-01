// Copy of basic-layout but heavily modified
import Head from 'next/head'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { useBlogContext } from './blog-context'
import { HeadingContext, MDXTheme } from './mdx-theme'

export const ResumeLayout = ({ children }: { children: ReactNode }) => {
  const { config, opts } = useBlogContext()
  const title = `${opts.title}${config.titleSuffix || ''}`
  const ref = useRef<HTMLHeadingElement>(null)
  return (
    <article
      className="nx-container nx-prose nx-prose-neutral nx-prose-lesserafim max-md:nx-prose-sm dark:nx-prose-invert"
      dir="ltr"
    >
      <Head>
        <title>{title}</title>
        {config.head?.({ title, meta: opts.frontMatter })}
      </Head>
      <HeadingContext.Provider value={ref}>
        {opts.hasJsxInH1 ? <h1 ref={ref} /> : null}
        {opts.hasJsxInH1 ? null : <h1>{opts.title}</h1>}
        <MDXTheme>{children}</MDXTheme>
      </HeadingContext.Provider>
    </article>
  )
}
