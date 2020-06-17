module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: 'airbnb',
  plugins: [
    'import',
    'jsx-a11y',
    'react',
  ],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-console': 'error', // airbnb is using warn
    'no-alert': 'error', // airbnb is using warn
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off', // temporary enabled
    'jsx-a11y/label-has-for': [2, {
      'required': {
        'every': ['id']
      }
    }], // for nested label htmlFor error
    'react/jsx-props-no-spreading': 'off', // temporary enabled
    'react/jsx-closing-bracket-location': 'off',
    "react/jsx-filename-extension": 'off',
    'import/no-useless-path-segments': 'off',
  },
  settings: {
    react: {
      version: '16.13'
    },
    'import/extensions': ['error', 'always', {ignorePackages: true}],
  }
}
