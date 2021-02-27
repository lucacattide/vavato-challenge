// Module Start
// JS imports
import Product from '../classes/Product';
import {createIstanceTest} from '../utils';

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
    createIstanceTest(Product, mockData);
  });
  test('It gets the product information', () => {
    // Mock clearing assertion
    expect(Product).not.toHaveBeenCalled();

    // Mocked instantiation
    const customProduct = createIstanceTest(Product, mockData);
    // Instance method mock
    const mockGetData = jest.fn();

    // Mocked getter definition
    Product.prototype.getData = mockGetData;

    // Result mock
    mockGetData.mockReturnValue(mockData);

    // Getter action
    const customProductInfo = customProduct.getData();

    // Method/Data assertions
    // Method calling
    expect(mockGetData).toHaveBeenCalled();
    // Result comparision
    expect(customProductInfo).toEqual(mockData);
  });
});
