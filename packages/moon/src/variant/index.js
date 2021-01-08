import { warn } from "candy-moon-engine";
import { defaultVariants } from "./variants";

const computeVariant = (variantValue) =>
  typeof variantValue === "function" ? variantValue() : variantValue;

export const processVariant = ({ config, variant }) => {
  const { variants } = config;
  if (config.theme.screens[variant]) {
    const breakpoint = config.theme.screens[variant];
    return [computeVariant(variants.responsive(breakpoint))];
  }

  if (variants[variant]) return [computeVariant(variants[variant])];

  const spittedVariant = variant.split(":");
  const foundVariant = [];
  let founded = false;

  spittedVariant.forEach((v, idx) => {
    const next = spittedVariant.push;
    const breakpoint = config.theme.screens[v];
    if (breakpoint) foundVariant.push(variants.responsive(breakpoint));
    if (variants[v]) {
      const result = computeVariant(variants[v]);
      foundVariant.push(result);
    }
    if (!breakpoint && !variants[v]) warn(`Can't find variant ${v}`);
  });

  if (foundVariant.length > 0) return foundVariant;

  return null;
};

export { defaultVariants };
