module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    webextensions: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/no-irregular-whitespace': ['warn', {
      skipStrings: true,
      skipComments: true,
      skipRegExps: true,
      skipTemplates: true,
      skipHTMLAttributeValues: true,
      skipHTMLTextContents: true
    }],
    'no-irregular-whitespace': 0,
    'no-trailing-spaces': 0,
    'no-multi-str': 0
  }
}
