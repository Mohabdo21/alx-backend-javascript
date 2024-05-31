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
    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new TypeError(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    this._sqft = sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = newSqft;
  }

  get sqft() {
    return this._sqft;
  }
}
