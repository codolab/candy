const h = require("react").createElement;
const { render } = require("react-dom");

const app = document.createElement("div");

module.exports = () => {
  const counter = Math.random();
  const Button = styled("button")(() => ({
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
    ":hover": {
      backgroundColor: "black",
    },
  }));

  const button = render(h(Button, { }, "Hello World"), app);
};

const styled = (C) => (...args) => (props) =>
  h(
    C,
    Object.assign({}, props, {
      style: Object.assign(
        {},
        props.style,
        ...args.map((a) => (typeof a === "function" ? a(props) : a))
      ),
    })
  );
