import { fetchMock, SELF } from "cloudflare:test";
import { afterEach, beforeAll, describe, expect, it } from "vitest";

const UPSTREAM = "https://svc-drcn.developer.huawei.com";
const PORTAL = "/community/servlet/consumer/cn/documentPortal";

beforeAll(() => {
  fetchMock.activate();
  fetchMock.disableNetConnect();
});

afterEach(() => fetchMock.assertNoPendingInterceptors());

describe("unknown document", () => {
  it("answers 404, not 502, when Huawei reports the document as not found", async () => {
    const huawei = fetchMock.get(UPSTREAM);
    huawei
      .intercept({ method: "POST", path: `${PORTAL}/checkCenterGrayUser` })
      .reply(200, { code: 0, message: "success", value: { isGrayUser: 0 } });
    // Captured from the live API on 2026-10-03 for a removed page.
    huawei
      .intercept({ method: "POST", path: `${PORTAL}/getDocumentById` })
      .reply(200, { code: 92531031, message: "document not found" });

    const res = await SELF.fetch(
      "https://example.com/consumer/en/doc/harmonyos-references/_ark_ui_compile",
    );

    expect(res.status).toBe(404);
  });
});
