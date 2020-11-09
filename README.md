<div align="center">
  <h1>🍭 candy</h1>
   Styling modern apps with atomic CSS-in-JS based on constraint-based design principles
  <br />
</div>

# Packages

This repository contains the following packages:

| Package                                                | Version                                                                                                                             | Docs                                                                                                                                                                                                                                                                          | Description                                                                        |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`@candy/atomic`](/packages/atomic)   | | [![](https://img.shields.io/badge/API%20Docs-readme-orange.svg?style=flat-square)](/packages/atomic/#readme) | 1KB Atomic CSS-in-JS                                                           |
| [`@candy/classic`](/packages/classic) | | [![](https://img.shields.io/badge/API%20Docs-readme-orange.svg?style=flat-square)](/packages/classic/#readme) | Compile style objects to classic CSS rules                                                      |
| [`@candy-moon/core`](/packages/moon) | | [![](https://img.shields.io/badge/API%20Docs-readme-orange.svg?style=flat-square)](/packages/moon/#readme) | Styled API for building fully configurable, theme aware components |
| [`@candy-moon/native`](/packages/moon-native) | | [![](https://img.shields.io/badge/API%20Docs-readme-orange.svg?style=flat-square)](/packages/moon-native/#readme) | @candy-moon for [React Native]() |

# Motivation

I'm big fan of [TailwindCSS](). But, during working with TailwindCSS, I got some problems with PurgeCSS and class precedence rules.

So, I created a css-in-js framework that:

- 👀Supports all existing Tailwind shorthand syntax.
- 🛠️Fully configurable theme & variants.
- 🔥Generates only the styles required.
- ✋No conflict precedence rules.
- 📱Supports React Native.

# Sandbox Demo

# Next.js Templates (Update later)

# Performance

When the css rule is injected in your application, it's mapped with a class and cached. That's mean it will never be injected again. So, Candy avoids unnecessary computation. It's just return the same class for the next render times.

# The Runtime Trade-off

Candy is hight performance. However, It's still javascript. Even if you use candy-moon, The runtime footprint need to compute style with the `styled-system` before generating class. So, you will need to consider using more lazy load or other alternatives.

# What's next?

## Development Experience

- [babel-preset-candy](): Support for the `css`, `sx` and `cx` props (🚧 WIP)
- [candy-devtools](/packages/devtools): Less painful atomic styles debugger (🚧 Researching)

## Performance

- [babel-plugin-candy-moon](): Transpile shorthand syntax at build time (🚧 Researching)

# Acknowledgements

Candy was heavily inspired by [styled-system]() and [TailwindCSS](https://tailwindcss.com/docs/installation). It also synthesizes ideas from many different CSS-in-JS frameworks. I'd like to thank all of them for their amazing work.

# License

MIT