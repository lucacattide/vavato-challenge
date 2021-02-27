// Module Start
// JS imports
import Receipt from '../classes/Receipt';
import {createIstanceTest} from '../utils';

// Receipt Unit Testing
// Class mocking
jest.mock('../classes/Receipt');

describe('Receipt Unit Test', () => {
  // Startup
  beforeEach(() => {
    // Instance clear
    Receipt.mockClear();
  });
  test('It calls the Receipt constructor', () => {
    createIstanceTest(Receipt);
  });
  test('It sets the receipt information', () => {
    const mockData = {
      cost: 100,
      taxes: 50
    };

    // Mock clearing assertion
    expect(Receipt).not.toHaveBeenCalled();

    // Mocked instantiation
    const customReceipt = createIstanceTest(Receipt);
    // Instance method mock
    const mockSetReceipt = jest.fn();

    // Mocked Setter definition
    Receipt.prototype.setReceipt = mockSetReceipt;

    // Setter action
    customReceipt.setReceipt(mockData);

    // Method calling assertion
    expect(mockSetReceipt).toHaveBeenCalled();
  });
  test('It gets the receipt total cost', () => {
    // Mock clearing assertion
    expect(Receipt).not.toHaveBeenCalled();

    // Mocked instantiation
    const customReceipt = createIstanceTest(Receipt);
    // Instance method mock
    const mockGetTotalCost = jest.fn();

    // Mocked getter definition
    Receipt.prototype.getTotalCost = mockGetTotalCost;

    // Result mock
    mockGetTotalCost.mockReturnValue(0);

    // Getter action
    const customTotalCost = customReceipt.getTotalCost();

    // Method/Data assertions
    // Method calling
    expect(mockGetTotalCost).toHaveBeenCalled();
    // Result comparision
    expect(customTotalCost).toEqual(0);
  });
  test('It gets the receipt total taxes amount', () => {
    // Mock clearing assertion
    expect(Receipt).not.toHaveBeenCalled();

    // Mocked instantiation
    const customReceipt = createIstanceTest(Receipt);
    // Instance method mock
    const mockGetTotalTaxes = jest.fn();

    // Mocked getter definition
    Receipt.prototype.getTotalTaxes = mockGetTotalTaxes;

    // Result mock
    mockGetTotalTaxes.mockReturnValue(0);

    // Getter action
    const customTotalTaxes = customReceipt.getTotalTaxes();

    // Method/Data assertions
    // Method calling
    expect(mockGetTotalTaxes).toHaveBeenCalled();
    // Result comparision
    expect(customTotalTaxes).toEqual(0);
  });
});
