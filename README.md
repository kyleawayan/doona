# doona

Kyle's Portfolio 2023.

This repo is a fork of the [Nextra](https://nextra.site) source code. This fork
contains some of my customizations of the blog theme. Since the monorepo has
everything hooked up together, I just decided to put my portfolio in here.

## Development

### Versioning

Please use [changesets](https://github.com/changesets/changesets) when making
changes to the Nextra packages. Right now I don't have a system for versioning
this fork, but it's nice to keep track now just in case a changelog is needed
later on.

I will try my best to keep the Nextra packages up to date with the upstream in
the `main` branch.

### Installation

The doona repository uses [PNPM Workspaces](https://pnpm.io/workspaces) and
[Turborepo](https://github.com/vercel/turborepo). To install dependencies, run
`pnpm install` in the project root directory.

### Live Editing

From the project root directory...

```sh
pnpm dev:doona
```

To edit the theme package and see changes while running `pnpm dev:doona`, make a
change in one of the MDX files. Next.js will do a full reload.
