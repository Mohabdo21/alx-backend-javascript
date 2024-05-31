/**
 *
 * @class
 * @classdesc Building Class
 */
export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new TypeError('Cannot instantiate from Building directly');
    }
    if (this.evacuationWarningMessage === undefined) {
      throw new TypeError(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
