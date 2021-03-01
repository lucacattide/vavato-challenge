// Module Start
// JS imports
import Product from '../classes/Product';
import {createInstanceTest} from '../utils';

// Product Unit Testing
// Class mocking
jest.mock('../classes/Product');

describe('Product Unit Test', () => {
  // Product data mock
  const mockData = {
    name: 'cake',
    price: 10.00,
    category: 'food',
    imported: false
  };

  // Startup
  beforeEach(() => {
    // Instance clear
    Product.mockClear();
  });
  test('It calls the Product constructor', () => {
    createInstanceTest(Product, mockData);
  });
  test('It gets the product information', () => {
    // Mock clearing assertion
    expect(Product).not.toHaveBeenCalled();

    // Mocked instantiation
    const customProduct = createInstanceTest(Product, mockData);

    // Mocked getter definition
    Product.prototype.getData = mockData;

    // Getter action
    const customProductInfo = customProduct.getData;

    // Data assertion
    expect(customProductInfo).toEqual(mockData);
  });
});
