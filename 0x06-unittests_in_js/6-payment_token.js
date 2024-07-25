/**
 * This function returns a promise that resolves with a success message when the input is true.
 *
 * @module getPaymentTokenFromAPI
 * @param {boolean} success - A boolean value representing the success of API request.
 * @returns {Promise} - A promise that resolves with a success message when the input is true.
 */
const getPaymentTokenFromAPI = (success) => (success
  ? Promise.resolve({ data: 'Seccessful response from the API' })
  : Promise.resolve());

module.exports = getPaymentTokenFromAPI;
