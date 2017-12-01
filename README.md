# Video Computing Group at UC Riverside's Website

If you have any questions on this repository, feel free to contact [John Pham](mailto:johnphammail@gmail.com).

## Overview

This website is built using [Vue.js](http://vuejs.org) and [Nuxt.js](https://nuxtjs.org/). The files in this repository are not the files you will deploy on your server.

## Prerequisites

You must have the following installed:

* [Node.js](https://nodejs.org/en/)

### Package Dependencies

Once you have Node installed, you will need to install the following dependencies via your cli. Use `npm install` while inside the root directory of this repository. After the dependencies are installed, you can develop or generate the website.

## To Run Locally

Type in `npm run dev` which will start a development server locally. You can access the website locally by using your browser to visit `localhost:3000`.

## Build the Website

Type in `npm run generate`. This will generate the website in `/dist`. The contents of that folder is what you will deploy on your production server.

## Making Changes

You should not make changes to files created in `/dist`. Those files are the compiled results of the source files. New pages can be created under `/pages`. The name of the file will correspond to the URL of that page. A file name `about.vue` will create a URL to `www.domain.com/about`. Changes will automatically show when running the development server.
