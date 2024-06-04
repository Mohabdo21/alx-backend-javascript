/**
 * Returns a string of Set values that start with a specific string.
 * @param {Set} set - The Set to get values from.
 * @param {string} startString - The string to check for at the start of each value.
 * @returns {string} A string of Set values that start with `startString`, separated by '-'.
 */
function cleanSet(set, startString) {
  if (
    typeof startString !== 'string' ||
    typeof set !== 'object' ||
    startString.length === 0
  ) {
    return '';
  }

  const result = [];
  for (const item of set) {
    if (item.startsWith(startString)) {
      result.push(item.slice(startString.length));
    }
  }

  return result.join('-');
}

export default cleanSet;