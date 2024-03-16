/** @type {import("prettier").Config} */
module.exports = {
  importOrder: [
    '^react$',
    '<BUILT_IN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  singleQuote: true,
};
