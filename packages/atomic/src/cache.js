export const cache = {
  get(property, value) {
    if (
      cache[property] != null &&
      cache[property].hasOwnProperty(value) &&
      cache[property][value] != null
    ) {
      return cache[property][value];
    }
  },
  set(property, value, object) {
    if (cache[property] == null) {
      cache[property] = {};
    }
    return (cache[property][value] = object);
  },
};
