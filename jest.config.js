module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)(spec|test).ts'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80
    }
  },
  collectCoverageFrom: [
    '!src',
    'src/**/*.{ts,js}',
    '!src/**/types/*.{ts,js}',
    '!src/**/enums/*.{ts,js}',
    '!src/**/constants/*.{ts,js}',
    '!src/**/__tests__/*.data.ts',
    '!src/__jests__/*.data.ts',
    '!src/**/__mocks__/**',
    '!src/server.ts',
    '!**/node_modules/**'
  ]
};
