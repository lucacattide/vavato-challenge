// Module Start
// JS imports
import Receipt from '../classes/Receipt';
import {createInstanceTest} from '../utils';

// Receipt Unit Testing
// Class mocking
jest.mock('../classes/Receipt');

describe('Receipt Unit Test', () => {
  const mockData = {
    cost: 100,
    taxes: 50,
    totalCost: 0,
    totalTaxes: 0
  };

  // Startup
  beforeEach(() => {
    // Instance clear
    Receipt.mockClear();
  });
  test('It calls the Receipt constructor', () => {
    createInstanceTest(Receipt);
  });
  test('It sets the receipt information', () => {
    // Mock clearing assertion
    expect(Receipt).not.toHaveBeenCalled();

    // Mocked instantiation
    const customReceipt = createInstanceTest(Receipt);

    // Mocked Setter definition
    Object.defineProperty(customReceipt, 'setReceipt', {
      set: (data) => {
        mockData.totalCost += data.cost;
        mockData.totalTaxes += data.taxes;
      }
    });

    // Setter action
    customReceipt.setReceipt = mockData;

    // Method calling assertion
    expect(mockData.totalCost).toEqual(mockData.cost);
    expect(mockData.totalTaxes).toEqual(mockData.taxes);
  });
  test('It gets the receipt total cost', () => {
    // Mock clearing assertion
    expect(Receipt).not.toHaveBeenCalled();

    // Mocked instantiation
    const customReceipt = createInstanceTest(Receipt);

    // Mocked getter definition
    Receipt.prototype.getTotalCost = 0;

    // Getter action
    const customTotalCost = customReceipt.getTotalCost;

    // Data assertion
    expect(customTotalCost).toEqual(0);
  });
  test('It gets the receipt total taxes amount', () => {
    // Mock clearing assertion
    expect(Receipt).not.toHaveBeenCalled();

    // Mocked instantiation
    const customReceipt = createInstanceTest(Receipt);

    // Mocked getter definition
    Receipt.prototype.getTotalTaxes = 0;

    // Getter action
    const customTotalTaxes = customReceipt.getTotalTaxes;

    // Data assertion
    expect(customTotalTaxes).toEqual(0);
  });
  test('It sets the receipt data', () => {
    // Mock clearing assertion
    expect(Receipt).not.toHaveBeenCalled();

    // Mocked instantiation
    const customReceipt = createInstanceTest(Receipt);
    const {cost, taxes} = mockData;

    // Setter action
    customReceipt.setReceiptInfo({cost, taxes});

    // Method calling assertion
    expect(customReceipt.setReceiptInfo).toHaveBeenCalled();
  });
});
