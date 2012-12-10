var aTest = function () {
  this.World = require("../support/world.js").World;

  this.givenNumber = 0;

  this.Given(/^a variable set to (\d+)$/, function(number, next) {
    this.givenNumber = parseInt(number, 10);
    next();
  });

  this.When(/^I increment the variable by (\d+)$/, function (number, next) {
    this.givenNumber = this.givenNumber + parseInt(number, 10);
    next();
  });

  this.Then(/^the variable should contain (\d+)$/, function (number, next) {
    if (this.givenNumber != number)
      throw(new Error("This test didn't pass, givenNumber is " + this.givenNumber + " expected 0"));
    next();
  });

  // this.Given(/^I am on "([^"]*)"$/, function(arg1, callback) {
  //   // express the regexp above with the code you wish you had
  //   callback.pending();
  // });

  // this.Then(/^I check url$/, function(callback) {
  //   // express the regexp above with the code you wish you had
  //   callback.pending();
  // });

  // this.Then(/^I should see "([^"]*)"$/, function(arg1, callback) {
  //   // express the regexp above with the code you wish you had
  //   callback.pending();
  // });

};

module.exports = aTest;