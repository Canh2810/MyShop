const config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '@app/*': ['<rootDir>/src/app/$1'],
    '@assets': '<rootDir>/src/assets/$1',
    '@components': '<rootDir>/src/components/$1',
    '@constants': '<rootDir>/src/constants/$1',
    '@hooks': '<rootDir>/src/hooks/$1',
    '@mocks': '<rootDir>/src/mocks/$1',
    '@stores': '<rootDir>/src/stores/$1',
    '@themes': '<rootDir>/src/themes/$1',
    '@types': '<rootDir>/src/types/$1',
    '@utils': '<rootDir>/src/utils/$1',
  },
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.css$': 'jest-transform-stub',
  },
  moduleDirectories: ['node_modules', 'src'],
}

export default config
