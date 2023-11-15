# doona

Kyle's Portfolio 2023.

This repo is a fork of the [Nextra](https://nextra.site) source code. This fork
contains some of my customizations of the blog theme. Since the monorepo has
everything hooked up together, I just decided to put my portfolio in here.

## Development

### Versioning

To keep a somewhat semantic versioning system while still being able to fetch
from the upstream repo, please treat the `doona` branch as the `main` branch.
Please use
[changeset's prerelease features](https://github.com/changesets/changesets/blob/main/docs/prereleases.md)
in this branch.

Versions for the doona-modified Nextra packages will be in the format:

```
<upstream version>-doona.<doona version>
```

e.g. `2.13.2-doona.23`. The actual `doona` app is not versioned.

### Installation

The doona repository uses [PNPM Workspaces](https://pnpm.io/workspaces) and
[Turborepo](https://github.com/vercel/turborepo). To install dependencies, run
`pnpm install` in the project root directory.

### Live Editing

From the project root directory...

```sh
pnpm dev:doona
```
