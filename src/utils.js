// Module Start
// JS imports
import Product from './classes/Product';
import Receipt from './classes/Receipt';
import Tax from './classes/Tax';

// Testing
// Input mocks
const shoppingCarts = {
  cart1: [{
    quantity: 1,
    name: 'book',
    price: 12.49,
    category: 'books',
    imported: false
  }, {
    quantity: 1,
    name: 'music CD',
    price: 14.99,
    category: 'music',
    imported: false
  }, {
    quantity: 1,
    name: 'chocolate bar',
    price: 0.85,
    category: 'food',
    imported: false
  }],
  cart2: [{
    quantity: 1,
    name: 'box of chocolates',
    price: 10.00,
    category: 'food',
    imported: true
  }, {
    quantity: 1,
    name: 'bottle of perfume',
    price: 47.50,
    category: 'makeup',
    imported: true
  }],
  cart3: [{
    quantity: 1,
    name: 'bottle of perfume',
    price: 27.99,
    category: 'makeup',
    imported: true
  }, {
    quantity: 1,
    name: 'bottle of porfume',
    price: 18.99,
    category: 'makeup',
    imported: false
  }, {
    quantity: 1,
    name: 'packed of headache pills',
    price: 9.75,
    category: 'medical',
    imported: false
  }, {
    quantity: 1,
    name: 'box of chocolates',
    price: 11.25,
    category: 'books',
    imported: true
  }]
};
// Output mocks
const shoppingReceipts = {
  receipt1: {
    prices: [
      shoppingCarts.cart1[0].price,
      16.49,
      shoppingCarts.cart1[2].price
    ],
    taxes: 1.50,
    total: 29.83
  },
  receipt2: {
    prices: [
      10.50,
      54.63
    ],
    taxes: 7.63,
    total: 65.13
  },
  receipt3: {
    prices: [
      32.19,
      20.89,
      shoppingCarts.cart3[2].price,
      11.85
    ],
    taxes: 6.70,
    total: 74.68
  }
};
/**
 * @description Test class instantiation
 * and returns it
 * @author Luca Cattide
 * @date 27/02/2021
 * @param {string} entity Testing class
 * @param {object|array} [mockData] Testing data
 * @returns
 */
const createInstanceTest = (entity, mockData = null) => {
  let instance = null;

  switch(entity) {
    case Product:
      const {name, price, category, imported} = mockData;

      instance = new Product(name, price, category, imported);

      // Constructor assertion
      expect(Product).toHaveBeenCalled();
      break;

    case Receipt:
      instance = new Receipt();

      expect(Receipt).toHaveBeenCalled();
      break;

    case Tax:
      instance = new Tax([...mockData]);

      expect(Tax).toHaveBeenCalled();
      break;

    default:
  }

  return instance;
};
/**
 * @description Returns the product price taxes included
 * @author Luca Cattide
 * @date 26/02/2021
 * @param {object} product Product
 * @param {object} salesTax Sales Tax
 * @param {number} importDutyTax Import Duty Tax rate
 */
const getProductPriceCharged = (product, salesTax, importDutyTax) => {
  let salesTaxAmount = 0;
  let importDutyTaxAmount = 0;
  let productPriceCharged = product.price;

  // Exemptions check
  // If the product category is not exempt then charge the price
  if (!salesTax.getExemptions
  .some((exemption) => exemption === product.category)) {
    salesTaxAmount = (product.price * salesTax.getRate) / 100;
    productPriceCharged += salesTaxAmount;
  }

  // If the product is imported then charge the price
  if (product.imported) {
    importDutyTaxAmount = (product.price * importDutyTax) / 100;
    productPriceCharged += importDutyTaxAmount;
  }

  return {
    // Ensures to round to the nearest 2rd decimal digit
    price: getRoundedValue(productPriceCharged),
    taxes: getRoundedValue(salesTaxAmount + importDutyTaxAmount)
  }
};

/**
 * @description Returns the correspondent value rounded
 * to the 2nd decimal digit
 * @author Luca Cattide
 * @date 27/02/2021
 * @param {number} value Value to be rounded
 * @returns
 */
const getRoundedValue = (value) => {
  return Math.round((value + Number.EPSILON) * 100) / 100;
};

// Module export
export {
  shoppingCarts,
  shoppingReceipts,
  createInstanceTest,
  getProductPriceCharged,
  getRoundedValue
}
// Module End
