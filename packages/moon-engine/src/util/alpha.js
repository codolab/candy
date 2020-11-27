import rgba from "color-rgba";

function hasAlpha(color) {
  return (
    color.startsWith("rgba(") ||
    color.startsWith("hsla(") ||
    (color.startsWith("#") && color.length === 9) ||
    (color.startsWith("#") && color.length === 5)
  );
}

export function toRgba(color) {
  const [r, g, b, a] = rgba(color);
  return [r, g, b, a === undefined && hasAlpha(color) ? 1 : a];
}

function withAlphaVariable({ color, variable }) {
  try {
    const [r, g, b, a] = toRgba(color);
    return [`rgba(${r}, ${g}, ${b}, var(${variable}))`, a];
  } catch (e) {
    return [color, null];
  }
}

export function transformColor({ color: c, property, variable }) {
  const [color, opacity] = withAlphaVariable({
    color: c,
    variable,
  });

  if (!opacity || c === "transparent") {
    return { [property]: c };
  }

  return {
    [property]: color,
    [variable]: opacity,
  };
}
