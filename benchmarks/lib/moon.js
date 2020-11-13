const h = require("react").createElement;
const { render } = require("react-dom");
const { cls } = require("../../packages/moon/dist/index.js");

const app = document.createElement("div");

module.exports = () => {
  const counter = Math.random();

  const className = cls`
    ${counter > 0 ? "opacity-50" : "opacity-100"}
    font-sans
    font-xl
    inline-block
    m-0
    p-4
    border-0
    rounded
    text-gray-900
    appearance-none
    hover:bg-gray-100
  `
  
  const button = render(
    h(({ children }) => children, { className }, "Hello World"),
    app
  );
};
