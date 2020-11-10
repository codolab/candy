const h = require("react").createElement;
const { render } = require("react-dom");
const { css } = require("goober");

const app = document.createElement("div");

module.exports = () => {
  const counter = Math.random();
  const className = css({
    opacity: counter > 0.5 ? 1 : 0,
    fontFamily: "inherit",
    fontSize: "inherit",
    display: "inline-block",
    margin: 0,
    padding: 16,
    border: 0,
    borderRadius: 4,
    color: "white",
    appearance: "none",
    "&:hover": {
      backgroundColor: "black",
    },
  });

  const button = render(
    h(({ children }) => children, { className }, "Hello World"),
    app
  );
};
