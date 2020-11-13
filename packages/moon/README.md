# candy-moon

Styled API for building fully configurable, theme aware components. Supports all existing Tailwind shorthand syntax

# Installation

Using [npm](https://www.npmjs.com/):

    $ npm install candy-moon

Using [yarn]():

    $ yarn add candy-moon

# Basic Usage

Use `sx` or `cls` function throughout your application to add styles based on your theme. It provides helpful shorthand to style components.

## Reset css

First of all, you need to import reset css file in top level of your entry file.

```js
import "candy-moon/dist/reset.min.css";
```

## Object syntax (sx)

The `sx` function lets you add any valid CSS or style values from your theme.

```jsx
import { sx } from "candy-moon";

const className = sx({
  // pick space.4 from theme => padding: 1rem;
  p: 4,
  // pick colors.gray.800 from theme => { background: "rgba(0,0,0, var(--bg-opacity))", "--bg-opacity": 1 }
  bg: "gray.800",
  // raw css values => fontSize: 14px;
  fontSize: 14,
});

render(<div className={className}>Box</div>);
```

## Variants (sx)

```js
const className = sx({
  color: "gray.700",
  fontWeight: "normal",
  fontSize: "base",
  _hover: {
    color: "gray.800",
    fontWeight: "semibold",
  },
  _md: {
    fontSize: "2xl"
  }
});
```

[Read more →](/docs/moon/sx.md)

## Tagged template syntax (cls)

`cls` function supports all existing Tailwind shorthand syntax base on your config.

```jsx
import cls from "candy-moon";

const className = cls`p-4 bg-gray-800`;

render(<div className={className}>Box</div>);
```

## Variants (cls)

Composing variants

```js
const className = cls`text-gray-700 font-normal text-base md:hover:text-gray-800 md:hover:font-semibold md:text-2xl`;
```

[Read more →](/docs/moon/cls.md)

# Different between `cls` and `sx` function

The `cls` provide class like TailwindCSS. That's mean if you want to add more styles, you must to customize your config. Unlike `cls` function. The `sx` function not only supports you add style values from your theme but also allows you add any valid CSS.
