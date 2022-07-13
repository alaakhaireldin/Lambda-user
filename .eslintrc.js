module.exports = {
  plugins: ['simple-import-sort'],
  parser: '@typescript-eslint/parser',
  extends: ['prettier', 'plugin:prettier/recommended'],
  rules: {
    'no-empty-function': 'off',
    'arrow-parens': [0, 'never'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
}
