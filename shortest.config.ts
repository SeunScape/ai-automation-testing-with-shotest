import type { ShortestConfig } from "@antiwork/shortest";

export default {
  headless: false,
  baseUrl: "http://www.saucedemo.com",
  browser: {
    contextOptions: {
      ignoreHTTPSErrors: true,
      // Record videos for debugging
      recordVideo: {
        dir: './test-results/videos',
      },
    },
  },
  testPattern: "tests/*.test.ts",
  ai: {
    provider: "anthropic",
    model: "claude-3-7-sonnet-20250219",
  },
} satisfies ShortestConfig;

