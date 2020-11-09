const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();

require("raf/polyfill");
require("browser-env")();
const atomic = require("./lib/atomic");
const goober = require("./lib/goober");
const inline = require("./lib/inline-styles");
const otion = require("./lib/otion");
const moon = require("./lib/moon");
const styled = require("./lib/styled-components");

require("@babel/register")({
  plugins: [[require("babel-plugin-emotion").default, { inline: true }]],
});
const emotion = require("./lib/emotion");

suite
  .add("emotion", emotion)
  .add("goober", goober)
  .add("inline-styles", inline)
  .add("atomic", atomic)
  .add("otion", otion)
  .add("moon", moon)
  .add("styled-components", styled)
  .on("cycle", (e) => {
    console.log(String(e.target));
  })
  .on("complete", function () {
    const sorted = this.filter()
      .sort(function (a, b) {
        a = a.stats;
        b = b.stats;
        return (a.mean + a.moe > b.mean + b.moe ? 1 : -1) * 1;
      })
      .map("name");
    console.log(`Result: ${sorted}`);
  })
  .run({ async: true });
