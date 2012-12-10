module.exports = function () {
    this.World = require('../support/world.js').World;
    var assert = require("assert");

    function go(url, callback) {
        this.spooky.thenOpen(this.baseUrl + url);
        callback();
    }

    function goBack(callback) {
        this.spooky.back();
        callback();
    }

    function goForward(callback) {
        this.spooky.forward();
        callback();
    }

    this.Given('I go to "$url"', go);
    this.When('I go to "$url"', go);

    this.Given('I go back', goBack);
    this.When('I go back', goBack);

    this.Given('I go forward', goForward);
    this.When('I go forward', goForward);

    this.Then('I should be on "$url"', function shouldBeOn(url, callback) {
        this.spooky.then([{
            url: url
        }, function () {
            this.echo('tarass');
            this.echo(this.getCurrentUrl());
            // this.test.assertUrlMatch(new RegExp(url));

        }]);
        callback();
    });

    this.Given(/^I search for "([^"]*)"$/, function(query, callback) {
        this.spooky.then([{
            query: query
        }, function () {
            this.echo(
                // this.waitForSelector('form#gbqf', function(){
                //     this.fill('form#gbqf', {
                //         'q': query
                //     }, true );
                // })
                this.fill('form', {
                    'SearchText': query
                }, true )
            );
        }]);
      callback();
    });

    this.Then(/^I see a link to "([^"]*)"$/, function(urlLink, callback) {
        this.spooky.then([{
            urlLink: urlLink
        }, function () {
            // this.debugPage();
            // this.echo(this.getHTML('#notice'));
            // this.echo(console.log('tarass'));
            // this.spooky.emit('error', new Error('mthfckn error'));
            this.test.assertExists('a[href="' + urlLink + '"]', 'url ' + urlLink + ' exists');
        }]);
        callback();
    });

    // this.Then(/^I see text with "([^"]*)"$/, function(text, callback) {
    //     // console.log('this', this);
    //     this.spooky.then([{
    //         text: text
    //     }, function () {
    //         this.echo('oooooooooooooooooo');
    //         // this.test.assertTitle(text, 'page body contains "' + text + '"');
    //         this.test.assert(false, 'page body contains "' + text + '"');
    //         // if (!this.test.assertTitle(text, 'page body contains "' + text + '"'))
    //         //     throw(new Error("This test didn't pass " + text + " not found"));
    //     }]);
    //     callback();
    // });

    this.Then(/^I see text with "([^"]*)"$/, function(text, callback) {
        this.spooky.then([{
            text: text
        }, function () {
            // this.debugPage();
            // this.echo(this.getHTML('#notice'));
            // this.echo(console.log('tarass'));
            // this.spooky.emit('error', new Error('mthfckn error'));
      throw new Error("Wrong value");
            this.test.assertExists('a[href="' + text + '"]', 'url ' + text + ' exists');
        }]);
        callback();
    });

    this.Then(/^I break test$/, function(callback) {
      // assert.ok(false, 'BREAK!');
      // throw new Error("Wrong value");
      callback();
    });


};

