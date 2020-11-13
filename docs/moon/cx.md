# The `cls` function

The `cls` function supports all existing Tailwind shorthand syntax base on your config.

See all classes and variants available [here](https://tailwindcss.com/docs/installation)

# Usage

```js
import { cls } from "candy-moon";
document.body.className = cls`h-screen h-screen bg-pink-500 color-white`;
```

Responsive Design

```css
/* Small (sm) */
@media (min-width: 640px) { /* ... */ }

/* Medium (md) */
@media (min-width: 768px) { /* ... */ }

/* Large (lg) */
@media (min-width: 1024px) { /* ... */ }

/* Extra Large (xl) */
@media (min-width: 1280px) { /* ... */ }
```

```jsx
/* Width of bg-red-500 by default, bg-green-50 on small screens, bg-pink-500 on md screens, bg-pink-500 and bg-teal-500 on lg screens and xl screens */
<div class={cls`bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500`}></div>
```

Usage with Pseudo-Class Variants

```jsx
import { cls } from "candy-moon";

render(
  <button class={cls`bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white`}>
    Hover me
  </button>
)
```

Combine with responsive also support `{screen}:{pseudo}`

```jsx
import { cls } from "candy-moon";

render(
  <input class={cls`border md:border-gray-400 md:focus:border-blue-500 bg-white text-gray-900 appearance-none inline-block w-full rounded py-3 px-4 focus:outline-none`} placeholder="Focus me">
)
```

# Function Signature

The `cls` function can be called in different ways:

```js
import { cls } from "candy-moon";

// Strings (variadic)
cls("bg-pink-500", true && "rounded", "p-4");
//=> "bg-pink-500 rounded p-4"

// Objects
cls({ "bg-pink-500": true, rounded: false, "p-4": isTrue() });
//=> "bg-pink-500 p-4"

// Objects (variadic)
cls({ "bg-pink-500": true }, { rounded: false }, null);
//=> "bg-pink-500"

// Arrays
cls(["bg-pink-500", 0, false, "rounded"]);
//=> "bg-pink-500 rounded"

// Arrays (variadic)
cls(["bg-pink-500"], ["", 0, false, "rounded"], [["p-4", [["m-4"], "space-x-4"]]]);
//=> "bg-pink-500 rounded p-4 m-4 space-x-4"
```