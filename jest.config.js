const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  transformIgnorePatterns: ["node_modules/poll"],
  setupFiles: ["dotenv/config"],
  reporters: ["default", "github-actions",
    ["jest-html-reporters", { "publicPath": "./test-reports", "filename": "report.html", "pageTitle": "api-test-seed-report", "enableMergeData": true }]]
};
