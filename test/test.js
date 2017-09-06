var expect    = require("chai").expect;
var main = require("../main");

describe("Sanity check", function() {
  describe(" runs", function() {
    it("doesn't crash", function() {
       main.complexity("../analysis.js")
    });
  });

//   describe("fuzzer works", function() {
//     it("mutate string", function() {
//         main.fuzzer.mutate.string("hello");
//     });
//   });
// });