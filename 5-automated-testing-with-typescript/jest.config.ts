/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {

    // Automatically clear mock calls, instances and results before every test
    clearMocks: true,

    // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
    modulePathIgnorePatterns: [
        "<rootDir>/build"
    ],

    // A preset that is used as a base for Jest's configuration
    // preset: undefined,
    preset: "ts-jest",
};
