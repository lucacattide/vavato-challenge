// Module Start
// JS imports
import shoppingReceipt from '../index';
import {shoppingCarts} from '../utils';

// Main Unit Testing
// Function mocking
jest.mock('../index');

describe('Main Unit Test', () => {
  test('It returns a detailed shopping receipt for each cart', () => {
    // Data result mocks
    const mockReceipts = {
      receipt1: '1  book: 12.49 1  music CD: 16.49 1  chocolate bar: 0.85 '+
      'Sales Taxes: 1.50 Total: 29.83',
      receipt2: '1 imported box of chocolates: 10.50 '+
      '1 imported bottle of perfume: 54.63 Sales Taxes: 7.63 Total: 65.13',
      receipt3: '1 imported bottle of perfume: 32.19 '+
      '1  bottle of porfume: 20.89 1  packed of headache pills: 9.75 '+
      '1 imported box of chocolates: 11.85 Sales Taxes: 6.70 Total: 74.68'
    };
    let receipts = {};

    // Mock clearing assertion
    expect(shoppingReceipt).not.toHaveBeenCalled();

    // Main action - receipts initialization
    Object.keys(shoppingCarts).forEach((shoppingCart, i) => {
      receipts[`receipt${i + 1}`] = shoppingReceipt({
        [shoppingCart]: shoppingCarts[shoppingCart]
      });
    });

    // Method/Data assertions
    // Method calling
    expect(shoppingReceipt).toHaveBeenCalled();
    // Result matching
    expect(receipts).toMatchObject(mockReceipts);
  });
  // Teardown
  afterEach(() => {
    // Function clear
    shoppingReceipt.mockClear();
  });
});
// Module End
