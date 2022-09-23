import type { Config } from "jest";
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

export default async (): Promise<Config> => {
  return {
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
};
