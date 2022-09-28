import type { Config } from "jest";
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

/**
 * https://jestjs.io/docs/configuration
 */
const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
  transformIgnorePatterns: ["node_modules/poll"],
  setupFiles: ["dotenv/config"],
  reporters: [
    "default",
    "github-actions",
    [
      "jest-html-reporters",
      {
        publicPath: "./test-reports",
        filename: "report.html",
        pageTitle: "api-test-seed-report",
        enableMergeData: true,
      },
    ],
  ],
};

export default config;
