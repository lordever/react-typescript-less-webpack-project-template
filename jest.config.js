const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig-paths.json');

const config = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/'}),
    testRegex: '.*\\.test\\.ts$',
    setupFiles: ['<rootDir>/jest.setup.js'],
};

module.exports = config;