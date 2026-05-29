# JSM Site

This repository publishes the JSM Obsidian digital garden as a static website using [Quartz](https://quartz.jzhao.xyz/).

## Content

Garden notes live in `content/`.

- `content/index.md` is the site homepage.
- `content/Home.md` is the original Obsidian home note.
- `content/Learning Path/` and `content/System Groups/` contain the main note trees.

## Local Development

Install dependencies:

```sh
npm install
```

Start the local Quartz preview server:

```sh
npm run dev
```

Then open:

```txt
http://localhost:8080
```

Build the static site into `public/`:

```sh
npm run build
```

## Quartz

Quartz is vendored into this repository under `quartz/`, with site configuration in `quartz.config.yaml`. The generated output in `public/` is ignored by git and can be rebuilt at any time.
