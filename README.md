<div align="center">
  <h1>🍭 candy</h1>
   A lightweight toolchain for building themeable apps with a focus on constraint-based design principles
  <br />
</div>

# Motivation

# Next.js Templates (Update later)

# Packages

This repository contains the following packages:

| Package                                                | Version                                                                                                                             | Docs                                                                                                                                                                                                                                                                          | Description                                                                        |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`@candy/atomic`](/packages/atomic)   | | [![](https://img.shields.io/badge/API%20Docs-readme-orange.svg?style=flat-square)](/packages/atomic/#readme) | 1kb atomic css-in-js                                                           |
| [`@candy/classic`](/packages/react-router-dom) | | [![](https://img.shields.io/badge/API%20Docs-readme-orange.svg?style=flat-square)](/packages/classic/#readme) | Parse existing style objects to classic CSS rules                                                      |
| [`@candy-moon/core`](/packages/moon) | | [![](https://img.shields.io/badge/API%20Docs-readme-orange.svg?style=flat-square)](/packages/moon/#readme) | Styled API for building fully configurable, theme aware components. Supports all existing Tailwind shorthand syntax |
| [`@candy-moon/native`](/packages/moon-native) | | [![](https://img.shields.io/badge/API%20Docs-readme-orange.svg?style=flat-square)](/packages/moon-native/#readme) | @candy-moon for [React Native]() |
| [candy-devtools](/packages/devtools) | 🚧 WIP | [![](https://img.shields.io/badge/API%20Docs-readme-orange.svg?style=flat-square)](/packages/moon-native/#readme) | Less painful atomic styles debugger  |

# Performance

When the css rule is injected in your application, it's mapped with a class and cached. That's mean it will never be injected again. So, Candy avoids unnecessary computation. It's just return the same class for the next render times.

# The Runtime Trade-off

Candy is hight performance. However, It's still javascript. Even if you use candy-moon, The runtime footprint need to compute style with the `styled-system` before generating class. So, you will need to consider using more lazy load or other alternatives. We recommend `tailwindcss` or `chakra-ui`

# Acknowledgements

Candy was heavily inspired by [styled-system]() and [tailwindcss]() and synthesizes ideas from many different css-in-js framework. I'd like thank all of them for their amazing work.

# License

MIT