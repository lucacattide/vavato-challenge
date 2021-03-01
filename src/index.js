// Module Start
// JS imports
import Tax from './classes/Tax';
import Product from './classes/Product';
import Receipt from './classes/Receipt';
import {shoppingCarts, getProductPriceCharged} from './utils';

// Main
/**
 * @description Returns a detailed shopping receipt
 * @author Luca Cattide
 * @date 26/02/2021
 * @param {array} cart Shopping cart
 * @returns
 */
const shoppingReceipt = (cart) => {
  // Initialization
  const salesTax = new Tax(10, [
    'books',
    'food',
    'medical'
  ]);
  const importDutyTax = new Tax(5, []);
  const receipt = new Receipt();
  const products = cart.map((product) => {
    const good = new Product(
      product.name,
      product.price,
      product.category,
      product.imported
    );

    return {
      quantity: product.quantity,
      good: good
    };
  });
  const taxedProducts = [];
  let output = '';

  // Price/Cost/Taxes calculation
  products.forEach((product) => {
    const productCharged = getProductPriceCharged(
      product.good.getData,
      salesTax,
      importDutyTax.getRate
    );

    // Set charged products
    taxedProducts.push({
      quantity: product.quantity,
      name: product.good.name,
      price: productCharged.price,
      imported: product.good.imported
    });
    // Update receipt
    receipt.setReceiptInfo({
      cost: productCharged.price,
      taxes: productCharged.taxes
    });
  });
  // Output
  taxedProducts.forEach((taxedProduct) => output += `${taxedProduct.quantity} `+
  `${taxedProduct.imported ? 'imported' : ''} `+
  // Ensures to keep even trailing zeroes
  `${taxedProduct.name}: ${taxedProduct.price.toFixed(2)} `);

  output += `Sales Taxes: ${receipt.getTotalTaxes.toFixed(2)} `+
  `Total: ${receipt.getTotalCost.toFixed(2)}`;

  return output;
};

// Main
const receipt = shoppingReceipt(shoppingCarts.cart1);

console.log(receipt);

// Module export
export default shoppingReceipt;
// Module End
