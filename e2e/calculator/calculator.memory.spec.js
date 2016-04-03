'use strict';

var CalculatorPage = require('./calculator.po.js'),
  page = new CalculatorPage();

describe('Memory List', function() {

  var firstNumber = 1,
    secondNumber = 2,
    thirdNumber = 3,
    fourthNumber = 4,
    firstSumText = '7',
    secondSumText = '3',
    initialMemoryCount = 0,
    expectedMemoryCount = 2;

  beforeEach(function() {
    page.get();
  });

  it('should start out with an empty list', function() {
    page.getMemoryListValues().then(function(values) {
      expect(values.length).toEqual(initialMemoryCount);
    });
  });

  it('should be filled with past results', function() {
    page.add(firstNumber, secondNumber);
    page.add(thirdNumber, fourthNumber);

    page.getMemoryListValues().then(function(values) {
      expect(values.length).toEqual(expectedMemoryCount);

      expect(values[0].getText()).toEqual(firstSumText);
      expect(values[1].getText()).toEqual(secondSumText);
    });
  });

});