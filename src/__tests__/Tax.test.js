// Module Start
// JS imports
import Tax from '../classes/Tax';
import {createInstanceTest} from '../utils';

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
    createInstanceTest(Tax, mockData);
  });
  test('It gets the tax rate', () => {
    // Mock clearing assertion
    expect(Tax).not.toHaveBeenCalled();

    // Mocked instantiation
    const customTax = createInstanceTest(Tax, mockData);

    // Mocked getter definition
    Tax.prototype.getRate = mockData[0];

    // Getter action
    const customTaxRate = customTax.getRate;

    // Data assertion
    expect(customTaxRate).toEqual(mockData[0]);
  });
  test('It gets the tax exemptions', () => {
    // Mock clearing assertion
    expect(Tax).not.toHaveBeenCalled();

    // Mocked instantiation
    const customTax = createInstanceTest(Tax, mockData);

    // Mocked getter definition
    Tax.prototype.getExemptions = mockData[1];

    // Getter action
    const customTaxExemptions = customTax.getExemptions;

    // Data assertion
    expect(customTaxExemptions).toEqual(mockData[1]);
  });
});
// Module End
