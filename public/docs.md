## How to use the Tailwind Full Palette

> Make sure to have the v2 of TailwindCSS at least. This tutorial will cover TailwindCSS framework configuration.


We will first install the package that allows us to extend the colors palette of TailwindCSS. To do that you must have `npm` or `yarn` installed.

Let's run the installation of `full-palette`

```bash
yarn add full-palette
```

Then you will add the preset to the tailwindcss configuration file, `tailwind.config.js`

```js
module.exports = {
  // Your config
  // ... 
  presets:[
      require('full-palette') // The line to add
  ] 
}
```

> PRO Tips : Don't forget to remove unused CSS with the purge property 😜

And that's it ! 🎉