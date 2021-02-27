// Module Start
// JS imports
import Tax from '../classes/Tax';
import {createIstanceTest} from '../utils';

// Tax Unit Testing
// Class mocking
jest.mock('../classes/Tax');

describe('Tax Unit Test', () => {
  // Tax data mock
  const mockData = [10, ['toys', 'food']];

  // Startup
  beforeEach(() => {
    // Instance clear
    Tax.mockClear();
  });
  test('It calls the Tax constructor', () => {
    createIstanceTest(Tax, mockData);
  });
  test('It gets the tax rate', () => {
    // Mock clearing assertion
    expect(Tax).not.toHaveBeenCalled();

    // Mocked instantiation
    const customTax = createIstanceTest(Tax, mockData);
    // Instance method mock
    const mockGetRate = jest.fn();

    // Mocked getter definition
    Tax.prototype.getRate = mockGetRate;

    // Result mock
    mockGetRate.mockReturnValue(mockData[0]);

    // Getter action
    const customTaxRate = customTax.getRate();

    // Method/Data assertions
    // Method calling
    expect(mockGetRate).toHaveBeenCalled();
    // Result comparision
    expect(customTaxRate).toEqual(mockData[0]);
  });
  test('It gets the tax exemptions', () => {
    // Mock clearing assertion
    expect(Tax).not.toHaveBeenCalled();

    // Mocked instantiation
    const customTax = createIstanceTest(Tax, mockData);
    // Instance method mock
    const mockGetExemptions = jest.fn();

    // Mocked getter definition
    Tax.prototype.getExemptions = mockGetExemptions;

    // Result mock
    mockGetExemptions.mockReturnValue(mockData[1]);

    // Getter action
    const customTaxExemptions = customTax.getExemptions();

    // Method/Data assertions
    // Method calling
    expect(mockGetExemptions).toHaveBeenCalled();
    // Result comparision
    expect(customTaxExemptions).toEqual(mockData[1]);
  });
});
// Module End
