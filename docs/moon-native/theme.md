# Theme

[Read here](../moon/theme.md)

# Special cases

The native platforms differs from some CSS standards there are some special cases.

## Box Shadow

```js
export const boxShadow = {
  xs: {
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 0.18,
    elevation: 1,
  },
  sm: {
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    elevation: 1,
  },
  base: {
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    elevation: 1,
  },
  md: {
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    elevation: 4,
  },
  lg: {
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 15,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    elevation: 4,
  },
  xl: {
    shadowOffset: { width: 0, height: 20 },
    shadowRadius: 25,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    elevation: 16,
  },
  "2xl": {
    shadowOffset: { width: 0, height: 25 },
    shadowRadius: 50,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    elevation: 24,
  },
  none: {
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowRadius: 0,
    elevation: 0,
  },
};
```

## Text Shadow

```js
export const textShadow = {
  base: {
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  md: {
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 6,
  },
  lg: {
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 0, height: 10 },
    textShadowRadius: 15,
  },
  xl: {
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 0, height: 20 },
    textShadowRadius: 25,
  },
  "2xl": {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 25 },
    textShadowRadius: 50,
  },
  none: {
    textShadowColor: "rgba(0, 0, 0, 0)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 0,
  },
};
```

# Added properties

## Position

Add `start` & `end` property

## Aspect Ratio

### Theme Reference

```js
export const aspectRatio = {
  "1": 1,
  none: 0,
}
```

| Style | Properties |
|-------|------------|
| ratio-1 | aspectRatio: 1 |
| ratio-none | 	aspectRatio: 0 |

## Direction

| Style | Properties |
|-------|------------|
| ltr | direction: "ltr" |
| rtl | direction: "rtl" |

## Margin

Add `ms` (marginStart) and `me` (marginEnd)

## Padding

Add `ps` (paddingStart) and `pe` (paddingEnd)

## Text Decoration

## Text Decoration Color

## Vertical Alignment

| Style | Properties |
|-------|------------|
| text-align-auto | textAlignVertical: "auto" |
| text-align-top | textAlignVertical: "top" |
| text-align-bottom | textAlignVertical: "bottom" |
| text-align-middle | textAlignVertical: "middle" |

## Include Font Padding

| Style | Properties |
|-------|------------|
| font-padding | includeFontPadding: true |
| font-padding-none	| includeFontPadding: false |

## Backface Visibility

| Style | Properties |
|-------|------------|
| backface-visible | backfaceVisibility: "visible" |
| backface-hidden | backfaceVisibility: "hidden" |

## Resize Mode

| Style | Properties |
|-------|------------|
| resize-cover | resizeMode: "cover" |
| resize-contain | resizeMode: "contain" |
| resize-stretch | resizeMode: "stretch" |
| resize-repeat | resizeMode: "repeat" |
| resize-center | resizeMode: "center" |

## Tint Color

Syntax is tint-{color}

eg: tint-white, tint-pink-500

## Tint Opacity

Syntax is tint-opacity-{opacity}

eg: tint-opacity-50

## Overlay Color

Syntax is overlay-{color}

eg: overlay-white, overlay-pink-500

## Overlay Opacity

Syntax is overlay-opacity-{opacity}

eg: overlay-opacity-50
