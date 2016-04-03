'use strict';

var CalculatorPage = require('./calculator.po.js'),
  page = new CalculatorPage();

describe('Addition', function() {

  var firstNumber = 4,
    secondNumber = 5,
    sumText = '9';

  beforeEach(function() {
    page.get();
  });

  it('should add numbers', function() {
    page.add(firstNumber, secondNumber);

    page.getResult().then(function(text) {
      expect(text).toEqual(sumText);
    });
  });

});