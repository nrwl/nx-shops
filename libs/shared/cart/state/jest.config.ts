/* eslint-disable */
export default {
  coverageDirectory: '../../../../coverage/libs/shared/cart/state',

  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {},
  displayName: 'shared-cart-state',
  snapshotSerializers: [
  ],
  transformIgnorePatterns: ['node_modules/(?!.*.mjs$)'],
  preset: '../../../../jest.preset.js',
};
