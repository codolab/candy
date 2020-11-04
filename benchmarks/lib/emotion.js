const h = require("react").createElement;
const { render } = require("react-dom");
const { css } = require("emotion");

const app = document.createElement("div");

module.exports = () => {
  const counter = Math.random();
  const className = css`
    opacity: ${counter > 0.5 ? 1 : 0};
    font-family: inherit;
    font-size: inherit;
    display: inline-block;
    margin: 0;
    padding: 16px;
    border: 0;
    border-radius: 4px;
    color: white;
    appearance: none;
    &:hover {
      background-color: black;
    }
  `;

  const button = render(
    h(({ children }) => children, { className }, "Hello World"),
    app
  );
};
