## Variants Configuration

#### Variant Reference

The following table shows default variants:

| Property | CSS Property | Theme Key |
|----------|--------------|-----------|
| hover | :hover | none |
| focus-within | :focus-within | none |
| focus-visible | :focus-visible | none |
| focus | :focus | none |
| active | :active | none |
| visited | :visited | none |
| disabled | :disabled | none |
| checked | :checked | none |
| first | :first-child | none |
| last | :last-child | none |
| odd | :nth-of-type(odd) | none |
| even | :nth-of-type(even) | none |
| group-hover | [role=group]:hover & | none |
| group-focus | [role=group]:focus & | none |
| sm | @media (min-width: 640px) | none |
| md | @media (min-width: 768px) | none |
| lg | @media (min-width: 1024px) | none |
| xl | @media (min-width: 1280px) | none |
| motion-safe | @media (prefers-reduced-motion: no-preference) | none |
| motion-reduce | @media (prefers-reduced-motion: no-reduce) | none |

### Extending the default variant

To customize the variant, create a `moon.config.js` and use the `configure` function:

```js
// moon.config.js
import { configure } from "candy-moon";

configure({
  variants: {
    dark: ".dark &",
    "dark-hover": ".dark &:hover",
  }
});
```

The `configure` function will be deep merged with the default variant. 

_Then you need to import your config file in top level of your entry file. eg: `src/index.js`_

```js
// src/index.js
import "./moon.config";
```

### Usage

With the `sx` function syntax is : _{variant} (camelCase)

```js
// hover variant
sx({
  _hover: {}
})
// group-hover variant
sx({
  _groupHover: {}
})
```

Combine variants

```js
sx({
  _md: {
    _hover: {},
    _focus: {},
  }
})
```

With the `cls` function syntax is: {variant}:

```js
// hover variant
cls`hover:`
// group-hover variant
cls`group-hover:`
```

Combine variants

```js
cls`md:hover:`
```