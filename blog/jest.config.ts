import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './',
})

const config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },

  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.css$': 'jest-transform-stub',
  },
  moduleDirectories: ['node_modules', 'src'],
}

export default createJestConfig(config)
