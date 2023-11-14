/* eslint-disable */
export default {
  coverageDirectory: '../../../../coverage/libs/shared/product/state',

  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {},
  displayName: 'shared-product-state',
  transformIgnorePatterns: ['node_modules/(?!.*.mjs$)'],
  preset: '../../../../jest.preset.js',
};
