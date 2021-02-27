// Module Start
// JS imports
import {shoppingReceipts} from '../utils';

// Main
// Module export
export default jest.fn((cart) => {
  let output = '';
  // Extract the correspondent receipt index
  let index = Object.keys(cart)[0].replace('cart', 'receipt');
  const goods = Object.entries(cart)[0][1];

  goods.forEach((product, i) => {
    output += `${product.quantity} ${product.imported ? 'imported' : ''} `+
    `${product.name}: ${shoppingReceipts[`${index}`].prices[i].toFixed(2)} `;

    // Index checking
    if (i === goods.length - 1) {
      output += `Sales Taxes: ${shoppingReceipts[`${index}`].taxes.toFixed(2)} `+
      `Total: ${shoppingReceipts[`${index}`].total.toFixed(2)}`;
    }
  });

  return output;
});
// Module End
