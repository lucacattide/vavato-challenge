# Vavato Coding Challenge

Enclosed are three programming problems. We ask that you read all three descriptions thoroughly then create a program to solve ONE of the problems. If you choose to do more than one problem, we will choose and evaluate only one of your solutions.

For the solution, you may use the programming language of your choice. You may not use any external libraries to solve this problem, but you may use external libraries or tools for building or testing purposes. Specifically, you may use unit testing libraries or build tools available for your chosen language (e.g., JUnit, Ant, NUnit, Rspec, Rake, etc.). You may also include a brief explanation of your design and assumptions along with your code.

## INTRODUCTION TO THE PROBLEMS

All problems below require some kind of input. You are free to implement any mechanism for feeding input into your solution (for example, using hard coded data within a unit test). You should provide sufficient evidence that your solution is complete by, as a minimum, indicating that it works correctly against the supplied test data.

## CHOSEN PROBLEM: N. TWO - SALES TAXES

### User Story

Basic sales tax is applicable at a rate of 10% on all goods, except books, food, and medical products that are exempt. Import duty is an additional sales tax applicable on all imported goods at a rate of 5%, with no exemptions.

When I purchase items I receive a receipt which lists the name of all the items and their price (including tax), finishing with the total cost of the items, and the total amounts of sales taxes paid. The rounding rules for sales tax are that for a tax rate of n%, a shelf price of p contains (np/100 rounded up to the nearest 0.05) amount of sales tax.

Write an application that prints out the receipt details for these shopping baskets… INPUT:

Input 1: 1 book at 12.49 1 music CD at 14.99 1 chocolate bar at 0.85

Input 2: 1 imported box of chocolates at 10.00 1 imported bottle of perfume at 47.50

Input 3: 1 imported bottle of perfume at 27.99 1 bottle of perfume at 18.99 1 packet of headache pills at 9.75 1 box of imported chocolates at 11.25

OUTPUT

Output 1: 1 book : 12.49 1 music CD: 16.49 1 chocolate bar: 0.85 Sales Taxes: 1.50 Total: 29.83

Output 2: 1 imported box of chocolates: 10.50 1 imported bottle of perfume: 54.65 Sales Taxes: 7.65 Total: 65.15

Output 3: 1 imported bottle of perfume: 32.19 1 bottle of perfume: 20.89 1 packet of headache pills: 9.75 1 imported box of chocolates: 11.85 Sales Taxes: 6.70 Total: 74.68

### Development Notes

- The application implementation stricly follows the user story specifications. It accepts and returns a single `string` input, representing respectively the expected data as described above. The `index.js` test cases are automated to run sequentially all the possible input. For convenience, data has been managed through data structures to properly compute them
- In this particular challenge scenario, all the tests are willingly step-by-step commented to describe the exact sequence of the implementation approaches. This choice has been made to endorse the test documentation, as specified in the challenge user story requirements
- Specific testing sections has been abstracted in order to prevent useless instruction/assertion redundancies, such as:

  - createInstanceTest: For class instantiation tests

  They're located in `/src/utils.js`

- Some of the output test case calculations were wrong. These have been re-caluclated with the correct results. Specifically:
  - _Output 2_: 1 imported bottle of perfume: 54.65 -> **54.63** Sales Taxes: 7.65 -> **7.63** Total: 65.15 -> **65.13**
    - Explanation:
      - 47.50 \* 15 (sales + import tax) / 100 = 7.125 -> which is rounded to **7.13**
      - 7.13 + 0.50 (imported box of chocolates sales tax) = **7.63**

## Getting Started

## Testing

To run the tests:

```
npm run test
```

To run the tests with code coverage report:

```
jest --coverage
```

### Code Coverage

![Branches](./coverage/badge-branches.svg 'Coverage - Branches') ![Branches](./coverage/badge-functions.svg 'Coverage - Functions') ![Branches](./coverage/badge-lines.svg 'Coverage - Lines') ![Branches](./coverage/badge-statements.svg 'Coverage - Statements')
