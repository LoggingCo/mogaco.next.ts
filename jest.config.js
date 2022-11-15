const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@mocks/(.*)$': '<rootDir>/src/__mock__/$1',
    '^@apis/(.*)$': '<rootDir>/src/apis/$1',
    '^@libs/(.*)$': '<rootDir>/src/libs/$1',
    '^@context/(.*)$': '<rootDir>/src/context/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@types/(.*)$': '<rootDir>/src/libs/types/$1',
    '^@constants/(.*)$': '<rootDir>/src/libs/constants/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@test/(.*)$': '<rootDir>/src/test/$1',
    '^@public/(.*)$': '<rootDir>/public/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
