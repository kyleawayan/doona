// Copied from packages/nextra-theme-docs/src/components/bleed.tsx
import type { ReactElement, ReactNode } from 'react'

export function Bleed({
  full,
  children
}: {
  full: boolean
  children: ReactNode
}): ReactElement {
  return (
    <div
      className={
        'nextra-bleed nx-relative -nx-mx-6 nx-mt-6 md:-nx-mx-8 2xl:-nx-mx-24' +
        (full
          ? ' ltr:xl:nx-ml-[calc(50%-50vw+16rem)] ltr:xl:nx-mr-[calc(50%-50vw)] rtl:xl:nx-ml-[calc(50%-50vw)] rtl:xl:nx-mr-[calc(50%-50vw+16rem)]'
          : '')
      }
    >
      {children}
    </div>
  )
}
