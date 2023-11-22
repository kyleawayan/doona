---
'nextra-theme-blog': minor
---

Use weight property instead of overriding
each font weight manually. This also fixed in some places (e.g. the table) where rendering of font weights were incorrect. Requires `weight` property when using `next/font/local`. Additionally add `fontOpticalSizing` (which I found was being used in `inter.css` included in the Inter font download)
