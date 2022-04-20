module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'plugin:react/recommended',
    'google'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'import'
  ],
  'settings': {
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
  },
  'rules': {
    'comma-dangle': 'off',
    'linebreak-style': 0,
    'require-jsdoc': 0,
    'react/react-in-jsx-scope': 'off',
    'max-len': ['error', {'code': 160}],
    'camelcase': 'off',
    'react/prop-types': 'off',
    'indent': 'off',
    'eol-last': 0,
    'no-multiple-empty-lines': ['error', {'max': 1, 'maxEOF': 0}],
    'no-var': 0,
    'react/no-unescaped-entities': 0,

  }
};
