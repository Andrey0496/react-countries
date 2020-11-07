module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [],
  // Custom rules
  rules: {
    // The react/jsx-uses-react and react/react-in-jsx-scope from React ˆ17.0.0
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
