module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleDirectories: ['node_modules', '.'],
  moduleNameMapper: {
    '\\.(scss|sass|css|png)$': 'identity-obj-proxy',
    '@/(.*)': '<rootDir>/$1'
  },
};