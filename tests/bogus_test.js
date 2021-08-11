"use strict";

const test = require("ava");

test("bogus", async function (t) {
  const response = "blah";
  t.assert(response === "bogus status");
});
