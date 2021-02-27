// Module Start
/**
 * @description Receipt class
 * @author Luca Cattide
 * @date 26/02/2021
 * @export
 * @class Receipt
 */
export default class Receipt {
  /**
   * Creates an instance of Receipt.
   * @author Luca Cattide
   * @date 26/02/2021
   * @memberof Receipt
   */
  constructor() {
    this.totalCost = 0;
    this.totalTaxes= 0;
  }

  /**
   * @description Receipt properties setter
   * @author Luca Cattide
   * @date 26/02/2021
   * @param {object} data Product base price & calculated taxes amount
   * @memberof Receipt
   */
  set setReceipt(data) {
    this.totalCost += data.cost;
    this.totalTaxes += data.taxes;
  }

  /**
   * @description Receipt total cost getter
   * @author Luca Cattide
   * @date 26/02/2021
   * @readonly
   * @memberof Receipt
   */
  get getTotalCost() {
    return this.totalCost;
  }

  /**
   * @description Receipt total taxes amount getter
   * @author Luca Cattide
   * @date 26/02/2021
   * @readonly
   * @memberof Receipt
   */
  get getTotalTaxes() {
    return this.totalTaxes;
  }

  /**
   * @description Receipt info setter
   * @author Luca Cattide
   * @date 27/02/2021
   * @param {object} data Product base price & calculated taxes amount
   * @memberof Receipt
   */
  setReceiptInfo(data) {
    this.setReceipt = data;
  }
}
// Module End
