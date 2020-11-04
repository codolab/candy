/* eslint-disable */
/* Fork from: https://github.com/cristianbote/goober/blob/master/src/core/astish.js */
let newRule = /(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi;
let ruleClean = /\/\*[\s\S]*?\*\/|\s{2,}|\n/gm;

/**
 * Convert a css style string into a object
 * @param {String} val
 * @returns {Object}
 */
const astish = (val) => {
  let tree = [{}];
  let block;

  while ((block = newRule.exec(val.replace(ruleClean, "")))) {
    // Remove the current entry
    if (block[4]) tree.shift();

    if (block[3]) {
      tree.unshift((tree[0][block[3]] = tree[0][block[3]] || {}));
    } else if (!block[4]) {
      tree[0][block[1]] = block[2];
    }
  }

  return tree[0];
};

/**
 * Convert Template literals into a object
 * @param {Array[String]} strings
 * @param {Array[any]} values
 * @returns {Object}
 */
const transform = (strings, values) => {
  const css = strings.reduce(
    (str, rule, i) => (str += [rule || "", values[i]].join(" ")),
    ""
  );
  return astish(css);
};

export default transform;
