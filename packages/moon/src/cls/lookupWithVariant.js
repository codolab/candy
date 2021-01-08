import { get } from "candy-system";
import { Configuration } from "candy-moon-engine";

import { mergeStyles, wrapByProps, normalizeByVariant } from "./util";
import { processVariant } from "../variant";

const betweenVariant = "& > :not([hidden]) ~ :not([hidden])";
const placeholderVariant = "&::placeholder";
const classic = "classic";

// TODO: make it fast :(
const mergeVariants = (obj, variants, translated, idx = 0) => {
  const variant = variants[idx];
  const last = idx === variants.length - 1;
  const out = normalizeByVariant(translated, variant);
  const normalizedKey = Object.keys(out)[0] || variant;
  const path = [...variants.slice(0, idx), normalizedKey];
  const oldVal = get(obj, path, {});
  
  // eg: md:placeholder-pink-500 md:divide-pink-500 md:placeholder-opacity-50 md:divide-opacity-50 md:divide-dashed
  if (
    last &&
    (translated[betweenVariant] || translated[placeholderVariant]) &&
    /^@/.test(variant)
  ) {
    const currentVariant = translated[betweenVariant]
      ? betweenVariant
      : placeholderVariant;
    const nextPath = [...variants.slice(0, idx), normalizedKey, currentVariant];
    const nextOldVal = get(obj, nextPath, {});

    return {
      [normalizedKey]: {
        ...oldVal,
        [currentVariant]: {
          ...nextOldVal,
          ...translated[currentVariant],
        },
      },
    };
  }

  return {
    [normalizedKey]: {
      ...oldVal,
      ...(last
        ? out[normalizedKey]
        : mergeVariants(obj, variants, translated, idx + 1)),
    },
  };
};

// TODO: caching
export const lookupWithVariant = (variant, translated, acc) => {
  const config = Configuration.get();

  let processedVariants;
  if (variant) {
    processedVariants = processVariant({
      variant: variant.slice(0, -1),
      config,
    });
  }

  if (translated[classic]) {
    const wrapped = wrapByProps(translated[classic], processedVariants || []);
    return mergeStyles(acc, classic, wrapped);
  }

  if (translated[placeholderVariant] && !processedVariants) {
    return mergeStyles(acc, placeholderVariant, translated[placeholderVariant]);
  }

  if (translated[betweenVariant] && !processedVariants) {
    return mergeStyles(acc, betweenVariant, translated[betweenVariant]);
  }

  if (processedVariants) {
    const result = mergeVariants(acc, processedVariants, translated);

    return {
      ...acc,
      ...result,
    };
  }
};
