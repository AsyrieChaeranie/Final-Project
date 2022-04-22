module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'plugin:react/recommended',
    'google',
    'plugin:import/typescript',
    'plugin:typescript/recommended',
    '@typescript-eslint/parser'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'import'
  ],
  'settings': {
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
    'eslint.workingDirectoriesy': ['src']
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
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
    'no-var': 0,
    'react/no-unescaped-entities': 0,
    
  }
};
