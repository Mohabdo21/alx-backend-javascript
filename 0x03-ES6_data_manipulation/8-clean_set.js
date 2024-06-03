/**
 * Returns a string of Set values that start with a specific string.
 * @param {Set} set - The Set to get values from.
 * @param {string} startString - The string to check for at the start of each value.
 * @returns {string} A string of Set values that start with `startString`, separated by '-'.
 */
function cleanSet(set, startString) {
  if (startString === '') return '';
  let result = '';
  for (const item of set) {
    if (item.startsWith(startString)) {
      result += `${item.slice(startString.length)}-`;
    }
  }
  return result.slice(0, -1);
}

export default cleanSet;
