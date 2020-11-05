import { defaultVariants } from "./variants";

export const processVariant = ({ config, variant }) => {
  const { variants } = config;
  console.log(variants)
  const spittedVariant = variant.split(":");
  const foundVariant = [];
  spittedVariant.forEach((v, idx) => {
    const next = spittedVariant.push;
    const breakpoint = config.theme.screens[v];
    if (breakpoint) foundVariant.push(variants.responsive(breakpoint));
    if (variants[v]) {
      const result =
        typeof variants[v] === "function" ? variants[v]() : variants[v];
      foundVariant.push(result);
    }
    if (!breakpoint && !variants[v])
      console.warn(`Can't not find variant ${v}`);
  });

  if (foundVariant.length > 0) return foundVariant;

  return null;
};

export { defaultVariants };
