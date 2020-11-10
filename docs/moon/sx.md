# The `sx` function

The `sx` function lets you add any valid CSS or style values from your theme.

# Property Reference

The following table shows properties will use values defined in the theme

## Animation

| Property | CSS Property | Theme Key |
|----------|--------------|-----------|
| animation | animation | animation & keyframes |

## Background

| Property | CSS Property | Theme Key |
|----------|--------------|-----------|
| bg | background | colors |
| bgColor, backgroundColor | backgroundColor | colors |
| bgOpacity | --bg-opacity | opacity |

## Border radius

| Property | CSS Property | Theme Key |
|----------|--------------|-----------|
| rounded, borderRadius | borderRadius | borderRadius |
| roundedTopLeft, borderTopLeftRadius | borderTopLeftRadius | borderRadius |
| roundedTopRight, borderTopRightRadius | borderTopRightRadius | borderRadius |
| roundedBottomLeft, borderBottomLeftRadius | borderBottomLeftRadius | borderRadius |
| roundedBottomRight, borderBottomRightRadius | borderBottomRightRadius | borderRadius |
| roundedTop, borderTopRadius | borderTopLeftRadius & borderTopRightRadius | borderRadius |
| roundedBottom, borderBottomRadius | borderBottomLeftRadius & borderBottomRightRadius | borderRadius |
| roundedLeft, borderLeftRadius | borderTopLeftRadius & borderBottomLeftRadius | borderRadius |
| roundedRight, borderRightRadius | borderTopRightRadius & borderBottomRightRadius | borderRadius |

## Box shadow

| Property | CSS Property | Theme Key |
|----------|--------------|-----------|
| boxShadow | boxShadow | boxShadow |
| opacity | opacity | opacity |

## Flex box

| Property | CSS Property | Theme Key |
|----------|--------------|-----------|
| flex | flex | flex |
| flexGrow | flexGrow | flexGrow |
| flexShrink | flexShrink | flexShrink |
| order | order | order |

## Grid

| Property | CSS Property | Theme Key |
|----------|--------------|-----------|
| gap | gap | gap |
| gridGap | gridGap | space |
| gridColumnGap | gridColumnGap | space |
| gridRowGap | gridRowGap | space |

## Layout

| Property | CSS Property | Theme Key |
|----------|--------------|-----------|
| top | top | inset |
| left | left | inset |
| bottom | bottom | inset |
| right | right | inset |
| insetY | top & bottom | inset |
| insetX | right & left | inset |
| z | zIndex | zIndex |

## Sizing

| Property | CSS Property | Theme Key |
|----------|--------------|-----------|
| w, width | width | width |
| minW, minWidth | minWidth | width |
| maxW, maxWidth | maxWidth | width |
| h, height | height | height |
| minH, minHeight | minHeight | height |
| maxH, maxHeight | maxHeight | height |

## Spacing

| Property | CSS Property | Theme Key |
|----------|--------------|-----------|
| p, padding | padding | space |
| py | paddingTop & paddingBottom | space |
| px | paddingLeft & paddingRight | space |
| pt, paddingTop | paddingTop | space |
| pl, paddingLeft | paddingLeft | space |
| pr, paddingRight | paddingRight | space |
| pb, paddingBottom | paddingBottom | space |
| m, margin | margin | space |
| my | marginTop & marginBottom | space |
| mx | marginLeft & marginRight | space |
| mt, marginTop | marginTop | space |
| ml, marginLeft | marginLeft | space |
| mr, marginRight | marginRight | space |
| mb, marginBottom | marginBottom | space |

## Typography

| Property | CSS Property | Theme Key |
|----------|--------------|-----------|
| fontFamily | fontFamily | fontFamily |
| fontSize | fontSize | fontSize |
| fontWeight | fontWeight | fontWeight |
| letterSpacing | letterSpacing | letterSpacing |
| lineHeight | lineHeight | lineHeight |
| color | color | colors |
| textOpacity | --text-opacity | opacity |

## Transition

| Property | CSS Property | Theme Key |
|----------|--------------|-----------|
| transitionProperty | transitionProperty | transitionProperty |
| transitionTimingFunction | transitionTimingFunction | transitionTimingFunction |
| transitionDuration | transitionDuration | transitionDuration |
| transitionDelay | transitionDelay | transitionDelay |

## Variant Reference

The following table shows default variants:

| Property | CSS Property | Theme Key |
|----------|--------------|-----------|
| _hover | :hover | none |
| _focusWithin | :focus-within | none |
| _focusVisible | :focus-visible | none |
| _focus | :focus | none |
| _active | :active | none |
| _visited | :visited | none |
| _disabled | :disabled | none |
| _checked | :checked | none |
| _first | :first-child | none |
| _last | :last-child | none |
| _odd | :nth-of-type(odd) | none |
| _even | :nth-of-type(even) | none |
| _groupHover | [role=group]:hover & | none |
| _groupFocus | [role=group]:focus & | none |
| _sm | @media (min-width: 640px) | none |
| _md | @media (min-width: 768px) | none |
| _lg | @media (min-width: 1024px) | none |
| _xl | @media (min-width: 1280px) | none |
| _motionSafe | @media (prefers-reduced-motion: no-preference) | none |
| _motionReduce | @media (prefers-reduced-motion: no-reduce) | none |