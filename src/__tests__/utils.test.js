// Module Start
// JS imports
import Tax from '../classes/Tax';
import Receipt from '../classes/Receipt';
import Product from '../classes/Product';
import {
  shoppingCarts,
  getProductPriceCharged,
  getRoundedValue,
  createInstanceTest
} from '../utils';

// Utilities Unit Testing
// Classes mocking
jest.mock('../classes/Tax');
jest.mock('../classes/Receipt');
jest.mock('../classes/Product');

describe('Utilities Unit Test', () => {
  // Startup
  beforeEach(() => {
    // Instances clear
    Tax.mockClear();
    Receipt.mockClear();
    Product.mockClear();
  });
  test('It creates a specific Product/Tax/Receipt class instance', () => {
    // Data mocks
    const mockData = [{
      entity: Product,
      data: shoppingCarts.cart1[0]
    }, {
      entity: Receipt,
      data: null
    }, {
      entity: Tax,
      data: [10, ['makeup']]
    }];
    const instances = mockData.map(
      (mock) => createInstanceTest(mock.entity, mock.data)
    );

    instances.forEach((instance, i) => {
      // Data assertion
      expect(instance instanceof mockData[i].entity).toBeTruthy();
    });
  });
  test('It gets the product price - taxes included - and the total taxes amount',
  () => {
    // Data mocks
    const mockData = {
      taxes: {
        sales: [10, [
          'food',
          'medical',
          'books'
        ]],
        importDuty: [5, []]
      },
      product: shoppingCarts.cart2[1],
      totalCost: ((shoppingCarts.cart2[1].price * 15) / 100) +
      shoppingCarts.cart2[1].price,
      totalTaxes: (shoppingCarts.cart2[1].price * 15) / 100
    };

    // Mock clearing assertions
    expect(Tax).not.toHaveBeenCalled();
    expect(Product).not.toHaveBeenCalled();

    // Mocked instantiations
    const customSalesTax = createInstanceTest(Tax, mockData.taxes.sales);
    const customImportDutyTax = createInstanceTest(Tax, mockData.taxes.importDuty);
    const customProduct = createInstanceTest(Product, mockData.product);

    // Constructor assertion
    expect(Tax).toHaveBeenCalledTimes(2);
    expect(Product).toHaveBeenCalledTimes(1);

    // Mocked getters definition
    Object.defineProperty(customSalesTax, 'getRate', {
      get: () => mockData.taxes.sales[0]
    });
    Object.defineProperty(customImportDutyTax, 'getRate', {
      get: () => mockData.taxes.importDuty[0]
    });
    Tax.prototype.getExemptions = mockData.taxes.sales[1];
    Product.prototype.getData = mockData.product;

    const customProductCharged = getProductPriceCharged(
      customProduct.getData,
      customSalesTax,
      customImportDutyTax.getRate
    );

    // Data assertion
    expect(customProductCharged).toEqual({
      // Excluding 1 box of chocolates from total cost + related taxes
      price: getRoundedValue(mockData.totalCost),
      taxes: getRoundedValue(mockData.totalTaxes)
    });
  });
  test('It returns the indicated value rounded to the 2nd decimal digit',
  () => {
    // Data assertion
    expect(getRoundedValue(7.125)).toEqual(7.13);
  });
});
// Module End
