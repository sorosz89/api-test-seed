import { spec } from "pactum";
import { setup } from "../config";
import { supportFunction } from "@utils/support";

// Pactum setup hook
beforeAll(() => {
  setup();
});

describe("first test", () => {
  it("should pass", async () => {
    /**
     * Example utility function
     *
     */
    supportFunction();
    /**
     * PactumJS spec
     *
     */
    return spec("check status", { endpoint: "/status/418", status: 418 });
  });
});
