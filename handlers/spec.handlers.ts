import { handler } from "pactum";
import { SpecHandlerContext } from "pactum/src/exports/handler";

handler.addSpecHandler("check status", (ctx: SpecHandlerContext) => {
  const { spec, data } = ctx;
  spec.get(data.endpoint);
  spec.expectStatus(data.status);
});
