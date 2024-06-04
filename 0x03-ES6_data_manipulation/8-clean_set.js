/**
 * Returns a string of Set values that start with a specific string.
 * @param {Set} set - The Set to get values from.
 * @param {string} startString - The string to check for at the start of each value.
 * @returns {string} A string of Set values that start with `startString`, separated by '-'.
 */
function cleanSet(set, startString) {
  if (typeof set !== 'object') return '';
  if (typeof startString !== 'string') return '';
  if (startString.length === 0) return '';

  const stringSet = [];
  [...set].forEach((item) => {
    if (item && item.indexOf(startString) === 0) {
      stringSet.push(item.replace(startString, ''));
    }
  });
  return stringSet.join('-');
}

export default cleanSet;
