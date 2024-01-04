module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    node: true,
    es2017: true,
  },
  ignorePatterns: ["**/__tests__/**/*.test.ts"],
  rules: {
    // コーディングに時間がかかるため、OFFにする
    '@typescript-eslint/explicit-module-boundary-types': "off",

    '@typescript-eslint/no-empty-function': "off",

    '@typescript-eslint/no-explicit-any': "off",

    '@typescript-eslint/no-unused-vars': "error",

    'no-empty-pattern': "off",

    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: "Don't declare enums. Use union types instead.",
      }
    ],

    semi: ["error", "always"],
  }
};