# Static/Server-Side Rendering

For SSR, use the sheet.extractCss() method to return the static CSS string after rendering a view.

```jsx
import { sheet } from "candy-moon"
import React from "react"
import ReactDOMServer from "react-dom/server"
import App from "./App"

const html = ReactDOMServer.renderToString(<App />)

const doc = `<!DOCTYPE html>
<style id="__candy">${sheet.extractCss()}</style>
${html}
`
```
