module.exports = {
  plugins: {
    'postcss-fixes': {},
    'postcss-merge-rules': {},
    'css-mqpacker': {
        sort: require('sort-css-media-queries')
    },
    'postcss-discard-duplicates': {},
    autoprefixer: {}
  }
}
