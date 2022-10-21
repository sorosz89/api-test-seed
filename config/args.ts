import yargs from "yargs/yargs";
import { Suite, suites } from "./test.suites";

export const getSuite = () => suites[argv.suite as keyof Suite];

const argv = yargs(process.argv)
  .options({
    suite: {
      alias: "s",
      type: "string",
      choices: ["smoke", "regression"],
      default: "regression",
      description: "The test suite to be executed. smoke or regression",
    },
  })
  .example([
    ["yarn test --suite=smoke, Run smoke tests"],
    ["yarn test --suite=regression, Run regression tests"],
  ])
  .parseSync();
