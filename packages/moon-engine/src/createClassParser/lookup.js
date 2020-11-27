import { get } from "candy-system";

import { utilityClassType1, utilityClassType3 } from "./utilities-class.js";
import { camelCase } from "../util";
import { Configuration } from "../Configuration";

let cache = {};

const findStyle = (className, theme) => {
  const splitted = className.split("-");
  const foundClassType3 = utilityClassType3.findIndex((val) =>
    className.startsWith(`${val}-`)
  );
  
  if (foundClassType3 !== -1) {
    // case: x-y-z-w => xY: "z.w"
    if (get(theme, `colors.${splitted[2]}`)) {
      const val = splitted.filter((_, idx) => idx > 1).join(".");
      return {
        property: camelCase(`${splitted[0]}-${splitted[1]}`),
        value: val,
      };
    }
    // case: -x-y-z => xY: "-z"
    if (splitted[0] === "") {
      const val = splitted.filter((_, idx) => idx > 2).join("-");
      return {
        property: camelCase(`${splitted[1]}-${splitted[2]}`),
        value: `-${val}`,
      };
    }
    // case: x-y-z => xY: "z"
    const val = splitted.filter((_, idx) => idx > 1).join("-");
    return {
      property: camelCase(`${splitted[0]}-${splitted[1]}`),
      value: val,
    };
  } else {
    // case: x-y-z => x: "y.z"
    if (get(theme, `colors.${splitted[1]}`)) {
      const val = splitted.filter((_, idx) => idx > 0).join(".");
      return {
        property: splitted[0],
        value: val,
      };
    }
    // case: -x-y => x: "-y"
    if (splitted[0] === "") {
      const val = splitted.filter((_, idx) => idx > 1).join("-");
      return {
        property: splitted[1],
        value: `-${val}`,
      };
    }
    // case x-y => x: "y"
    const val = splitted.filter((_, idx) => idx > 0).join("-");
    return {
      property: splitted[0],
      value: val,
    };
  }
};

export const createLookup = (processSystem) => (className) => {
  if (cache[className]) return cache[className];
  const config = Configuration.get();
  const { theme } = config;
  let property, value;

  if (utilityClassType1[className]) {
    property = utilityClassType1[className];
    value = className;
  }

  if (!property || !value) {
    const style = findStyle(className, theme);
    property = style.property;
    value = style.value;
  }

  const translated = processSystem({ theme, property, value }) || {};

  cache[className] = translated;
  return translated;
};
