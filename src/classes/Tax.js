// Module Start
/**
 * @description Tax class
 * @author Luca Cattide
 * @date 26/02/2021
 * @export
 * @class Tax
 */
export default class Tax {
  /**
   * Creates an instance of Tax.
   * @author Luca Cattide
   * @date 26/02/2021
   * @param {number} rate Tax rate
   * @param {array} exemptions Tax-exempt product categories
   * @memberof Tax
   */
  constructor(rate, exemptions) {
    this.rate = rate;
    this.exemptions = [...exemptions];
  }

  /**
   * @description Tax rate getter
   * @author Luca Cattide
   * @date 26/02/2021
   * @readonly
   * @memberof Tax
   */
  get getRate() {
    return this.rate;
  }

  /**
   * @description Tax-exempt product categories getter
   * @author Luca Cattide
   * @date 26/02/2021
   * @readonly
   * @memberof Tax
   */
  get getExemptions() {
    return this.exemptions;
  }
}
// Module End
