# candy-atomic

Atomic CSS-in-JS solution

# Install

```sh
npm install candy-atomic
```

Or:

```sh
yarn add candy-atomic
```

# Usage

candy-atomic works with any framework, support both object styles and string syntax.

## Basic Usage

```jsx
import { css } from "candy-atomic";

const className = css`
  padding: 32px;
  background-color: tomato;
`;

/* 
const className = css({
  padding: "32px",
  backgroundColor: "tomato"
});
*/
render(<div className={className}>Box</div>);
```

## Pseudoclasses

```jsx
import { css } from "candy-atomic";

const className = css`
  padding: 32px;
  background-color: tomato;
  &:hover {
    color: white;
  }
`;

/* 
const className = css({
  padding: "32px",
  backgroundColor: "tomato",
  "&:hover": {
    color: "white",
  }
});
*/
render(<div className={className}>Box</div>);
```

## Media Queries

```jsx
import { css } from "candy-atomic";

const className = css`
  padding: 32px;
  background-color: tomato;
  &:hover {
    color: white;
  }
  @media (min-width: 1024px) {
    background-color: pink;
  }
`;

/* 
const className = css({
  padding: "32px",
  backgroundColor: "tomato",
  "&:hover": {
    color: "white",
  },
  "@media (min-width: 1024px)": {
    backgroundColor: "pink"
  }
});
*/
render(<div className={className}>Box</div>);
```

## Child Selectors

```jsx
import { css } from "candy-atomic";

const className = css`
  padding: 32px;
  background-color: tomato;
  &:hover {
    color: white;
  }
  @media (min-width: 1024px) {
    background-color: pink;
  }
  & > * + * {
    margin-left: 16px;
  }
`;

/* 
const className = css({
  padding: "32px",
  backgroundColor: "tomato",
  "&:hover": {
    color: "white",
  },
  "@media (min-width: 1024px)": {
    backgroundColor: "pink"
  },
  "& > * + *": {
    marginLeft: "16px",
  }
});
*/
render(<div className={className}>Box</div>);
```

# Static/Server-Side Rendering

For SSR, use the sheet.extractCss() method to return the static CSS string after rendering a view.

```jsx
import { sheet } from "candy-atomic"
import React from "react"
import ReactDOMServer from "react-dom/server"
import App from "./App"

const html = ReactDOMServer.renderToString(<App />)

const doc = `<!DOCTYPE html>
<style id="__candy">${sheet.extractCss()}</style>
${html}
`
```
