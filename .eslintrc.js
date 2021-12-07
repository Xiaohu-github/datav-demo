module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes': 'off',
    'semi': 'off',
    'comma-dangle': 'off',
    'key-spacing': 'off',
    'no-else-return': 'off',
    'max-len': 'off',
    'no-param-reassign':'off',
    'no-plusplus':'off',
    'vue/no-unused-components':'off',
    'no-undef':'off',
    'linebreak-style':'off',
    'import/newline-after-import':'off',
    'import/extensions':'off',
    'space-before-function-pare':'off',
    'space-before-function-paren':'off',
    'object-curly-spacing':'off',
    'eol-last':'off',
    'object-shorthand':'off',
    'prefer-template':'off',
    'indent':'off',
    'prefer-const':'off',
    'padded-blocks':'off',
    'arrow-spacing':'off'
  },
};
