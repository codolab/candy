function generatePseudoClassVariant(pseudoClass) {
  return `&:${pseudoClass}`;
}

export const defaultVariants = {
  // pseudo-class variants
  hover: generatePseudoClassVariant("hover"),
  "focus-within": generatePseudoClassVariant("focus-within"),
  "focus-visible": generatePseudoClassVariant("focus-visible"),
  focus: generatePseudoClassVariant("focus"),
  active: generatePseudoClassVariant("active"),
  visited: generatePseudoClassVariant("visited"),
  disabled: generatePseudoClassVariant("disabled"),
  checked: generatePseudoClassVariant("checked"),
  //
  first: generatePseudoClassVariant("first-child"),
  last: generatePseudoClassVariant("last-child"),
  odd: generatePseudoClassVariant("nth-of-type(odd)"),
  even: generatePseudoClassVariant("nth-child(even)"),
  //
  "group-hover": "[role=group]:hover &",
  "group-focus": "[role=group]:focus &",
  // media variants
  responsive: (size) => {
    return `@media (min-width: ${size})`;
  },
  "motion-safe": "@media (prefers-reduced-motion: no-preference)",
  "motion-reduce": "@media (prefers-reduced-motion: no-reduce)",
};
