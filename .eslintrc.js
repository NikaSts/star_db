module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react'],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': 'error', // airbnb is using warn
    'no-alert': 'error', // airbnb is using warn
    'react/prop-types': 'off', // temporary enabled
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off', // temporary enabled
    'react/jsx-filename-extension': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'import/no-useless-path-segments': 'off',
  },
  settings: {
    react: {
      version: '16.13',
    },
  },
};
