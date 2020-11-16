<div align="center">
  <h1>🍭 candy</h1>
   Styling modern apps with Atomic CSS-in-JS focus on constraint-based design principles
  <br />
</div>

# Packages

This repository contains the following packages:

| Package                                                | Version                                                                                                                             | Docs                                                                                                                                                                                                                                                                          | Description                                                                        |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`candy-atomic`](/packages/atomic)   | [![npm](https://img.shields.io/npm/v/candy-atomic.svg?style=flat-square)](https://www.npmjs.com/package/candy-atomic) | [![](https://img.shields.io/badge/API%20Docs-readme-orange.svg?style=flat-square)](/packages/atomic/#readme) | Atomic CSS-in-JS                                                           |
| [`candy-classic`](/packages/classic) | [![npm](https://img.shields.io/npm/v/candy-classic.svg?style=flat-square)](https://www.npmjs.com/package/candy-classic) | [![](https://img.shields.io/badge/API%20Docs-readme-orange.svg?style=flat-square)](/packages/classic/#readme) | Compile style objects to classic CSS rules                                                      |
| [`candy-moon`](/packages/moon) | [![npm](https://img.shields.io/npm/v/candy-moon.svg?style=flat-square)](https://www.npmjs.com/package/candy-moon) | [![](https://img.shields.io/badge/API%20Docs-readme-orange.svg?style=flat-square)](/packages/moon/#readme) | Styled API for building fully configurable, theme aware components |
| [`candy-moon-native`](/packages/moon-native) | [![npm](https://img.shields.io/npm/v/candy-moon-native.svg?style=flat-square)](https://www.npmjs.com/package/candy-moon-native) | [![](https://img.shields.io/badge/API%20Docs-readme-orange.svg?style=flat-square)](/packages/moon-native/#readme) | Use candy-moon in [React Native](https://reactnative.dev/) |

# Motivation

I'm a big fan of [TailwindCSS](https://tailwindcss.com). But, during working with TailwindCSS, I got some problems with PurgeCSS and class precedence rules. Read more about [Atomic CSS-in-JS](https://sebastienlorber.com/atomic-css-in-js)

So, I created a CSS-in-JS framework that:

- 👀Supports all existing Tailwind shorthand syntax.
- 🛠️Fully configurable theme & variants.
- 🔥Generates only the styles required.
- ✋No conflict precedence rules.
- ✨Works with any framework.
- 📱Supports React Native.

If you aren't familiar with the Tailwind's syntax. Give a try to object syntax. It's also based on your configuration and provides helpful shorthand ways to style components.

# Sandbox Demo

- [React](https://codesandbox.io/s/react-candy-moon-demo-l85vt)
- [React Native](https://snack.expo.io/@tungtbt/react-candy-moon-native)

# Performance

When the css rule is injected in your application, It's mapped with a class and cached. That's mean It will never be injected again. So, Candy avoids unnecessary computation. It's just return the same class for the next render times.

# What's next?

## Developer Experience

- [candy-devtools](/packages/devtools): Less painful atomic styles debugger (🚧 Researching)

## Performance

- Translate shorthand syntax at compile-time instead of runtime (🚧 Researching)

## Core

- Writing Plugins. (🚧 WIP)
- Strict mode for warning or catching error.

## Playground

- [next-candy-ladi](https://next-candy-ladi-two.vercel.app/) (🚧 WIP)
- Frames UI: `Colorless` Candy blocks.

# Contribute

All contributions are welcome. Even, if you notice wrong information, typos, or grammar mistake (English is not my primary language). Feel free to open an issue or create a pull request.

# Acknowledgements

Candy was heavily inspired by [styled-system](https://styled-system.com/) and [TailwindCSS](https://tailwindcss.com/docs/installation). It also synthesizes ideas from many different CSS-in-JS frameworks. I'd like to thank all of them for their amazing work.

# License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
