/* eslint-disable no-var, prefer-template */
/* https://github.com/rexxars/hyphenate-style-name/blob/main/index.js */
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function toHyphenLower(match) {
  return "-" + match.toLowerCase();
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name];
  }

  var hName = name.replace(uppercasePattern, toHyphenLower);
  return (cache[name] = msPattern.test(hName) ? "-" + hName : hName);
}

export default hyphenateStyleName;
