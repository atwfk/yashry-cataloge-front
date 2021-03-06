module.exports = {
  roots: ["./pages", "./modules"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      babelConfig: true,
      tsconfig: "jest.tsconfig.json",
    },
  },
  testMatch: ["**/?(*.)+(test).+(ts|js|tsx)"],
  setupFilesAfterEnv: ["./setup-tests.ts"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["./.next/", "./node_modules/"],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 30,
      statements: 40,
    },
  },
  collectCoverage: true,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|mp4|webm|mp3)$": "<rootDir>/__mocks__/mocks.js",
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
