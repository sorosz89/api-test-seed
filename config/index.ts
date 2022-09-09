import "../handlers/spec.handlers";
import { request, stash } from "pactum";
import { baseConfig } from "./base.config";

export type PactumConfig = {
  baseUrl: string;
  dataPath?: string;
};

export const setup = (pactumConfig?: PactumConfig): void => {
  const configuration = pactumConfig ? { ...baseConfig, ...pactumConfig } : baseConfig;
  request.setBaseUrl(configuration.baseUrl);
  if (configuration.dataPath) {
    stash.loadData(configuration.dataPath);
  } else {
    stash.loadData();
  }
};
