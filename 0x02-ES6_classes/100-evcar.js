import Car from './10-car';

/**
 *
 * @class
 * @classdesc EVCar inhetits from Car
 */
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(newRange) {
    this._range = newRange;
  }

  //   cloneCar() {
  //     return new Car();
  //   }

  /**
   * @returns {Car}
   */
  static get [Symbol.species]() {
    return Car;
  }
}
