// подключите плагины в файл
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssPresetEnv = require("postcss-preset-env");
const postcssImport = require("postcss-import");
const postcssNested = require("postcss-nested");

module.exports = {
  // подключите плагины к PostCSS
  plugins: [
    postcssImport,
    postcssNested,
    postcssPresetEnv,
    // подключите autoprefixer
    autoprefixer,
    // cssnano при подключении нужно передать объект опций
    // { preset: default } говорит о том, что нужно использовать
    // стандартные настройки минификации
    cssnano({ preset: "default" }),
  ],
};
