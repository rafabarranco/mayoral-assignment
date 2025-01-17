const nextJest = require('next/jest');
const { compilerOptions } = require('./tsconfig.json');

const createJestConfig = nextJest({
  dir: './',
});

const moduleNameMapper = Object.keys(compilerOptions.paths).reduce((acc, key) => {
  const path = compilerOptions.paths[key];
  return {
    ...acc,
    [`^${key.replace('*', '(.*)')}$`]: path.map((p) => `<rootDir>/${p.replace('*', '$1')}`),
  };
}, {});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  moduleNameMapper,
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/e2e/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};

module.exports = createJestConfig(customJestConfig);
