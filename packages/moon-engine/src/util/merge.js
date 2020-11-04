export function isPlainObject(item) {
  return item && typeof item === "object" && item.constructor === Object;
}

export default function merge(
  target,
  source,
  options = { clone: false }
) {
  const output = options.clone ? { ...target } : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      // Avoid prototype pollution
      if (key === "__proto__") {
        return;
      }

      if (isPlainObject(source[key]) && key in target) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        output[key] = merge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}
