const h = require("react").createElement;
const { render } = require("react-dom");
const styled = require("styled-components").default;

const app = document.createElement("div");

module.exports = () => {
  const counter = Math.random();
  const Button = styled("button")`
    opacity: ${counter > 0.5 ? 1 : 0};
    font-family: inherit;
    font-size: inherit;
    display: inline-block;
    margin: 0;
    padding: 16px;
    border: 0;
    border-radius: 4px;
    color: white;
    background-color: ${(props) => props.color};
    appearance: none;
    &:hover: {
      background-color: black;
    }
  `;

  const button = render(h(Button, { }, "Hello World"), app);
};
