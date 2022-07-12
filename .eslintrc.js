module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // 组件命名
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'], // 需要忽略的组件名
      },
    ],
    // 文件后缀
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    // 识别别名
    'import/resolver': {
      typescript: {
        directory: './tsconfig.json',
      },
    },
  },
};
