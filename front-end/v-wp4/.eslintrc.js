module.exports = {
  env: {
    'browser': true,
    'es6': true
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'prettier/prettier': [
      'error',
      {
        'printWidth': 100,
        'singleQuote': true,
        'trailingComma': true,
      },
    ],
  },
};
