// Copy of basic-layout but heavily modified
import Head from 'next/head'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { useBlogContext } from './blog-context'
import { HeadingContext, MDXTheme } from './mdx-theme'

export const ResumeLayout = ({ children }: { children: ReactNode }) => {
  const { opts } = useBlogContext()
  const title = `${opts.title} Resume`
  const ref = useRef<HTMLHeadingElement>(null)
  return (
    <article
      className="nx-prose nx-prose-neutral nx-prose-lesserafim nx-prose-resume_screen print:nx-prose-resume_print dark:nx-prose-invert nx-max-w-3xl print:nx-max-w-2xl print:nx-py-4"
      dir="ltr"
    >
      <Head>
        <title>{title}</title>
      </Head>
      <HeadingContext.Provider value={ref}>
        {opts.hasJsxInH1 ? <h1 ref={ref} /> : null}
        {opts.hasJsxInH1 ? null : <h1>{opts.title}</h1>}
        <MDXTheme>{children}</MDXTheme>
      </HeadingContext.Provider>
    </article>
  )
}
