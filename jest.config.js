module.exports = {
  forceExit: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  skipNodeResolution: true,
  globals: {
    'ts-jest': {},
  },
  testEnvironment: 'node',
  unmockedModulePathPatterns: [],
  setupFiles: ["<rootDir>/src/jest.setenv.ts"],
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
  collectCoverageFrom: ['src/**/*.ts', '!src/test/**', '!src/typings/**', '!**/*.mock.ts'],
  rootDir: process.cwd(),
}
