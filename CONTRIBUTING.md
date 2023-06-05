# 🤝 Contributing

## Writing Content

The site is generated based on the content in the `docs` folder. Each folder in `docs` represents a section of the site. Each `.md` and `.mdx` file in a folder represents a page in that section. You can learn more by reading more about [Docusaurus](https://github.com/facebook/docusaurus), the static site generator used to build this site.

I recommend keeping a consistent format throughout the guide. For example, preceding each section title is a relevant emoji.

## Installation

Install all required dependencies:

```
$ npm i
```

## Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

The site is deployed through Vercel. Any changes pushed to the `main` branch will be automatically deployed to the live site. You may first want to test your changes on a branch before merging to `main`, both locally and by viewing the Vercel preview.
