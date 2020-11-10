# candy-classic

Dangerous css-in-js

# Install

```sh
npm install candy-classic
```

Or:

```sh
yarn add candy-classic
```

# Usage

```jsx
import classic from "candy-classic";

const className = classic({
  padding: "32px",
  backgroundColor: "tomato"
});

render(<div className={className}>Box</div>);
```