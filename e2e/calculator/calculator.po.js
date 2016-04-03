'use strict';

var CalculatorPage = function() {

	var firstInput = element(by.model('first')),
		secondInput = element(by.model('second')),
		goButton = element(by.id('gobutton')),
		result = element(by.binding('latest')),
		memoryListValues = element.all(by.repeater('result in memory').column('result.value')),
		me = this;

	this.get = function() {
		browser.get('http://localhost:3456');
	};

	this.getResult = function() {
		return result.getText();
	};

	this.getMemoryListValues = function() {
		return memoryListValues;
	};

	this.add = function(first, second) {
		firstInput.sendKeys(first);
		secondInput.sendKeys(second);
		goButton.click();

		return me.getResult();
	};

};

module.exports = CalculatorPage;