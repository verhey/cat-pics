# cat-pics

## Synopsis

A site that serves a random picture of my cat. That's about it. Built mostly as a re-familiarization exercise with JS/CSS.

<img width="1012" alt="image" src="https://user-images.githubusercontent.com/22968861/220535377-3afde130-d3a2-40ed-80cd-9fadaa62e20d.png">

Built using NodeJS, Netlify Functions, and years of curated cat pictures.

See it live [here](https://deancat.netlify.app)

## Dependencies

- A reasonably recent version of Node - I'm using v23 but anything after 19 or so should work too.
- A [Netlify](https://app.netlify.com/) account - free tier is fine

## Structure

- `functions`
  - Contains Netlify Functions code
    - At this time there's only one function (`cat.js`) that picks + serves a random image
  - `cats/`
    - This is a directory of the random images to serve
- `public`
  - This is a static site calling the random cat function and displaying its results

## Installation

- Check out the repo
- `npm install`
- `npm run auth`
- `npm run dev`
- From there you should have the site running in a browser.
- Optional: You may want to configure your editor/IDE with Prettier and ESlint
  - They can also be run via `npm run lint` and `npm run fix`

## Contributing

- Fork it and use it for your cat or dog or something
- There are some small enhancements I'd like to make eventually, but I don't intend to bloat the scope of this.
  - Don't let the function return the same image twice in a row
    - Suggestions: Pass the current image in subsequent requests to the same endpoint, filter it out of results before returning
  - Change to git LFS/Netlify Large Media instead of checking in the full cat pictures to version control
  - Make the transition when loading a new picture a little less jarring - the full page repaint can look janky in some browsers
  - Add tests... I'm a professional software engineer, I swear
