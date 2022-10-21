export type Suite = {
  smoke: string[];
  regression: string[];
};

export const suites: Suite = {
  smoke: ["**/__test__/smoke**/*.[jt]s?(x)"],
  regression: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
};
