// Module Start
// JS imports
import Tax from '../classes/Tax';
import Product from '../classes/Product';
import {
  shoppingCarts,
  shoppingReceipts,
  getProductPriceCharged,
  getRoundedValue
} from '../utils';

// Utilities Unit Testing
// Classes mocking
jest.mock('../classes/Tax');
jest.mock('../classes/Product');

describe('Utilities Unit Test', () => {
  // Startup
  beforeEach(() => {
    // Instances clear
    Tax.mockClear();
    Product.mockClear();
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
      product: shoppingCarts.cart2[1]
    };

    // Mock clearing assertions
    expect(Tax).not.toHaveBeenCalled();
    expect(Product).not.toHaveBeenCalled();

    const customSalesTax = new Tax(...mockData.taxes.sales);
    const customImportDutyTax = new Tax(...mockData.taxes.importDuty);
    const customProduct = new Product({...mockData.product});

    // Constructor assertion
    expect(Tax).toHaveBeenCalledTimes(2);
    expect(Product).toHaveBeenCalledTimes(1);

    // Instance method mocks
    const mockGetRate = jest.fn();
    const mockGetExemptions = jest.fn();
    const mockGetData = jest.fn();

    Tax.prototype.getRate = mockGetRate;
    Tax.prototype.getExemptions = mockGetExemptions;
    Product.prototype.getData = mockGetData;

    // Result mocks
    mockGetRate.mockReturnValueOnce(mockData.taxes.sales[0]);
    mockGetRate.mockReturnValueOnce(mockData.taxes.importDuty[0]);
    mockGetExemptions.mockReturnValue(mockData.taxes.sales[1]);
    mockGetData.mockReturnValue(mockData.product);

    const customProductCharged = getProductPriceCharged(
      customProduct.getData(),
      customSalesTax,
      customImportDutyTax.getRate()
    );

    // Method/Data assertions
    expect(mockGetRate).toHaveBeenCalled();
    expect(mockGetExemptions).toHaveBeenCalled();
    expect(mockGetData).toHaveBeenCalled();
    expect(customProductCharged).toEqual({
      // Excluding 1 box of chocolates from total cost + related taxes
      price: getRoundedValue(
        shoppingReceipts.receipt2.total - shoppingReceipts.receipt2.prices[0]
      ),
      taxes: getRoundedValue(shoppingReceipts.receipt2.taxes - 0.50)
    });
  });
  test('It returns the indicated value rounded to the 2nd decimal digit',
  () => {
    expect(getRoundedValue(7.125)).toEqual(7.13);
  });
});
// Module End
