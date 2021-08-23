"use strict";

const path = require("path");
const { run } = require("../../../utils/test-utils");

describe("Config:", () => {
  it("supplied config file is absent", async () => {
    const { exitCode, stderr, stdout } = await run(__dirname, [
      "-c",
      path.resolve(__dirname, "webpack.config.js"),
    ]);

    // should throw with correct exit code
    expect(exitCode).toBe(2);
    // Should contain the correct error message
    expect(stderr).toContain(
      `Failed to load '${path.resolve(__dirname, "webpack.config.js")}' config`,
    );
    expect(stdout).toBeFalsy();
  });
});
