const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    tailwindcss('./src/tailwind.config.js'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: { flexbox: 'no-2009' },
      stage: 3,
      features: { 'nesting-rules': true }
    }),
    process.env.NODE_ENV === 'production' &&
      purgecss({
        content: ['./src/**/*.ts', './src/**/*.tsx'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      })
  ]
};
