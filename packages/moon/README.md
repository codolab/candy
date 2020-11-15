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

The `cls` provide class like TailwindCSS. That's mean if you want to add more styles, you must to customize your config. Unlike `cls` function, the `sx` function not only supports you add style values from your theme but also allows you add any valid CSS.

# The `cls`, `sx` and `css` Prop

## JSX Pragma

`candy-moon` isn't built in to support any pragma. So, you need to set up before using custom jsx.

Eg: React

```js
import * as React from "react";
import { setup } from "candy-moon/jsx";

// Should be called just once
setup(React.createElement);
```

Eg: Preact

```js
import { h } from "preact";
import { setup } from "candy-moon/jsx";

// Should be called just once
setup(h);
```

To use the `cls`, `sx` and `css` prop, set the custom jsx pragma comment at the top your module and import the jsx function.

```jsx
/** @jsx jsx */
import { jsx } from "candy-moon/jsx"

export default props => (
  <div 
    {...props}
    cls="bg-pink-500 p-4"
    sx={{
      bg: "pink.500",
      p: 4,
    }}
  />
)
```

**Note: The `cls`, `sx` or `css` prop return classNames and append `className` prop. Be careful when using them at the same time **

Use the css prop to render raw CSS values.

```jsx
/** @jsx jsx */
import { jsx } from "candy-moon/jsx"

export default props => (
  <div 
    {...props}
    css={{
      background: "hotpink",
      padding: 16,
    }}
  />
)
```

[JSX Pragma Babel Document](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx)


_Note: If you use React or Next.js version that has [New JSX Transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) (Eg: CRA4 & Next.js 10) then /** @jsx jsx */ pragma might not work and you should use /** @jsxImportSource candy-moon */ instead._

# API

## sx(styles: object)

Accepts styles objects and returns classNames string.

## cls(...input: mixed)

returns classNames string.

## css(taggedTemplate | styles: object)

Accepts styles objects or tagged template and returns classNames string.

[Read more →](/packages/atomic/README.md)

## clsx(...input: mixed)

Returns classNames string

[Read more →](https://github.com/lukeed/clsx)

## sheet.extractCSS()

Returns the rendered CSS string for static and server-side rendering.

## configure(config: { theme: Object, variants: Object })

Define your color palette, typographic, breakpoints, v..v or add variants

[Read more →](/docs/moon/theme.md)

