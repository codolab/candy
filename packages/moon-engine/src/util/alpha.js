import rgba from "color-rgba";

// const isBlack = (val) =>
//   val === "black" ||
//   (val.startsWith("#") && val.split("").findIndex((c) => c !== "0") === -1);

// function parseColor(val) {
//   const x = document.createElement("div");
//   document.body.appendChild(x);
//   let color, rgba;
//   let red = 0,
//     green = 0,
//     blue = 0,
//     alpha = undefined;
//   try {
//     x.style = "color: " + val + "!important;visibility: hidden;";
//     color = window.getComputedStyle(x).color;
//     rgba = color
//       .match(/rgba?\((.*)\)/)[1]
//       .split(",")
//       .map(Number);
//     red = rgba[0];
//     green = rgba[1];
//     blue = rgba[2];
//     alpha =
//       "3" in rgba
//         ? rgba[3]
//         : (red !== 0 && green !== 0 && blue !== 0) || isBlack(val)
//         ? 1
//         : undefined;
//   } catch (e) {}
//   x.parentNode.removeChild(x);
//   return [red, green, blue, alpha];
// }

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
