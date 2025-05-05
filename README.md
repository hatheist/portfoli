# Hathim Ashir - Multimedia Storyteller Portfolio

This is the portfolio website for Hathim Ashir, a multimedia storyteller based in Hyderabad. The site showcases his work across various media formats including photography, writing, video, and audio.

## Portfolio Sections

This portfolio includes the following sections:

- **About** - Professional biography and background
- **Reels** - Short video content exploring behind-the-scenes of iconic movie moments
- **Interview** - Audio interview with photographer and educator Chempkumar
- **Photo Essay** - "Muslimah, Beyond the Veil: Stories of Faith and Femininity"
- **Podcast** - "The Dialogues: One Conversation at a Time" featuring the Birding Pals community
- **Marketing Campaign** - Work done for the Sahodari Foundation
- **Multimedia Internship** - Content created at The Siasat Daily
- **Featured Articles** - Published writing for The News Minute
- **Published Photographs** - Photography featured in Maktoob Media
- **Magazine** - Contributions to "Home – Cultural Crossroads" magazine
- **Documentary** - "Thottunkal Palli Since 1904" documentary film

## Technical Information

This site is built with:
- Next.js
- Material UI (MUI v5)
- TypeScript
- Responsive design principles for all devices

## Local Development

To work on this project locally:

```bash
# Install dependencies
npm install
# or
pnpm install

# Run the development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

```bash
npm run build
# or
pnpm build
```

The static export will be generated in the `out` directory.

## Contact

For inquiries, please contact Hathim Ashir at contact@hathimashir.com or through social media:
- Instagram: [@hathimashir](https://www.instagram.com/hathimashir/)
- LinkedIn: [hathim-ashir](https://www.linkedin.com/in/hathim-ashir/)

## Image resizing
In dev mode resized images will be created on the first visit to a gallery page.  
This can cause the first page load to appear slow, as it will wait until all the images are generated
before returning the page to ensure you don't see missing images.   
Subsequent visits will be faster as only missing resized images are generated

If not already performed in dev mode, images will be generated during the `npm run build` step.  
To avoid delays on first load in dev mode you can run the build first.  
If you have a very large set of photos this may be worth it.

Resizing and conversion to WebP is performed using [sharp](https://sharp.pixelplumbing.com/).

## Customising the Site
You need to make at the least the following changes:
- In `next.config.js` edit the site URL and title.  The title is displayed above the menu.  The URL is used for metadata, e.g. open graph previews and canonical links.
- In `pages/index.tsx` edit the site title, description, about content and meta data.
- Create your own custom icons and replace the ones in the `public/images/icon.png`.
- Replace the images in `public/images` with your own images (profile, logo etc.).
- Create your own gallery images and replace the ones in `public/images/gallery`.
- In each gallery create an `_index.mdx` file to describe the gallery content.  If you don't create an _index.mdx file the site tries its best using the folder name.  For SEO a proper set of metadata is recommended. 

## Deploying the Site
To deploy the site, run `npm run build` which will build and export the size including generating the resized images.
You can then deploy the site using any static site hosting service. 
For example, I use cloudflare pages to host my site.  

If you want to preview the built site, run `npm run build && npm run serve` which will serve the exported site locally from `/out`.

## Adding a New Gallery or New Images
To add a new gallery, create a new folder in `public/images/gallery` and add your images to it.
Then, create an `_index.mdx` file in the folder to describe the gallery content.

To add images you just need to drop them in the appropriate gallery folder.

## Customising the Theme
The theme is defined in `src/themes/Darktheme.tsx`. You can customise the theme by editing this file.
The fonts are loaded in `src/themes/fonts.ts` and used by the theme.
If you need more instructions on how to customise the theme, please refer to the [Material UI documentation](https://mui.com/material-ui/customization/theming/).

## Contents of the `_index.mdx` file
The `_index.mdx` file is used to describe the gallery content. It is written in markdown and can contain the following:
- `title` - the title of the gallery shown in the menu
- `description` - a description of the gallery used in meta tags (it should be longer and descriptive)
- `keywords` - a list of keywords used in meta tags
- `caption` - which is the header displayed on each gallery page
For example
```markdown
---
title: Gallery Title
description: A description of the gallery for metadata search engines
keywords: keyword1, keyword2, keyword3
caption: A caption for the gallery
---
The markdown section is currently unused.
```

## Open graph previews
If you want open graph previews, create them by taking screenshots (or using a tool) and
drop them in `public/open-graph/[path]`. The path should be the same as the gallery path.
The home page is `public/open-graph/about.png`.

There is a sample custom preview you can use at `/ogimage`.

## Contributions
If you have a suggested enhancement, feel free to submit a pull request.


## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
Attribution is required.

Copyright (c) 2023 Hathim Ashir




