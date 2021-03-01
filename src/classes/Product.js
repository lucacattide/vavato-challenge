// Module Start
/**
 * @description Product class
 * @author Luca Cattide
 * @date 26/02/2021
 * @export
 * @class Product
 */
export default class Product {
  /**
   * Creates an instance of Product.
   * @author Luca Cattide
   * @date 26/02/2021
   * @param {string} name Product name
   * @param {number} price Product shelf price
   * @param {string} category Product category
   * @param {boolean} imported Product importation flag
   * @memberof Product
   */
  constructor(name, price, category, imported) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.imported = imported;
  }

  /**
   * @description Product getter
   * @author Luca Cattide
   * @date 26/02/2021
   * @readonly
   * @memberof Product
   */
  get getData() {
    return {
      name: this.name,
      price: this.price,
      category: this.category,
      imported: this.imported
    }
  }
}
// Module End
