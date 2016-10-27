var Nightmare = require('nightmare');

var expect = require('chai').expect;

describe('log in page', function() {
  it('should check if the log in button exists', function() {
    var nightmare = Nightmare();

    nightmare
      .goto('http://localhost:3000')
      .evaluate(function () {
        return document.querySelector('button.FacebookLogin');
      })
      .end()
      .then(function(button) {
        expect(button.alt).to.equal('Sign up with Facebook');
        done();
      });
  });
});
