/**
 * Returns a string of Set values that start with a specific string.
 * @param {Set} set - The Set to get values from.
 * @param {string} startString - The string to check for at the start of each value.
 * @returns {string} A string of Set values that start with `startString`, separated by '-'.
 */
function cleanSet(set, startString) {
  if (
    !(set instanceof Set) ||
    typeof startString !== 'string' ||
    startString === ''
  ) {
    return '';
  }

  const filteredItems = Array.from(set)
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length));

  return filteredItems.join('-');
}

export default cleanSet;
