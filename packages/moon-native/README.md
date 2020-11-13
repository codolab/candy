# candy-moon-native

Use candy-moon in React Native

# Install

```sh
npm install candy-moon-native
```

Or:

```sh
yarn add candy-moon-native
```

# Usage

## Style Object syntax

```jsx
import { SafeAreaView, View, Text } from "react-native";
import { sx } from "candy-moon-native";

const App = () => (
  <SafeAreaView style={sx({ w: "full", h: "full" })}>
    <View style={sx({ bg: "blue.200", px: 3, py: 1, rounded: "full" })}>
      <Text style={sx({ color: "blue.800", fontWeight: "semibold" })}>
        Hello World
      </Text>
    </View>
  </SafeAreaView>
);
```

## Tagged template syntax

```jsx
import { SafeAreaView, View, Text } from "react-native";
import { cls } from "candy-moon-native";

const App = () => (
  <SafeAreaView style={cls`w-full h-full`}>
    <View style={cls`bg-blue-200 px-3 py-1 rounded-full`}>
      <Text style={cls`text-blue-800 font-semibold`}>Hello World</Text>
    </View>
  </SafeAreaView>
);
```

_Note: Both `sx` or `cls` function return id created by StyleSheet. If you want to return simple object with style try: `sx.raw` or `cls.raw`_

# Supported Utilities

## Layout

- Display
- Overflow
- Position
- Top / Right / Bottom / Left
- Z-Index
- Aspect Ratio
- Direction

## Flex box

- Flex direction
- Flex Wrap
- Align Items
- Align Content
- Align Self
- Justify Content
- Flex
- Flex Grow
- Flex Shrink
- Flex Basis

## Spacing

- Padding
- Margin

## Sizing

- Width
- Min-Width
- Max-Width
- Height
- Min-Height
- Max-Height

## Typography

- Font Family
- Font Size
- Font Style
- Font Variant
- Font Weight
- Letter Spacing
- Line Height
- Text Align
- Text Color
- Text Opacity
- Text Decoration
- Text Decoration Color
- Text Decoration Opacity
- Text Shadow
- Text Transform
- Vertical Alignment
- Include Font Padding

## Backgrounds

- Background Color
- Background Opacity

## Borders

- Border Radius
- Border Width
- Border Color
- Border Opacity
- Border Style

## Effects

- Box Shadow
- Oapcity

## Image

- Backface Visibility
- Resize Mode
- Tint Color
- Tint Opacity
- Overlay Color
- Overlay Opacity

# Theme

[Read more →](/docs/moon-native/theme.md)

# What's missing?

## Variants

Basically, candy-moon-native doesn't support variants. But, I have a few ideas about them:

For example about platform variants: `web:`, `ios:`, `android:`

Happy to see you open issue if you have any ideas.
