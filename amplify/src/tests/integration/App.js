var Nightmare = require('nightmare');

var chai = require('chai');
// var asPromised = require('chai-as-promised');

// chai.use(asPromised);

var FacebookLogin = 'button.FacebookLogin';

describe('log in page', function() {
  it('should check if the log in button exists', function(done) {
    var nightmare = Nightmare({ show: true });
    // var buttonExists = nightmare
    //   .goto('http://localhost:3000/')
    //   .exists(FacebookLogin)
    //   .end();
    // chai.expect(buttonExists).to.be.true;
    // done();
    // // buttonExists.should.be.true;

    nightmare
      .goto('http://localhost:3000/')
      .wait(FacebookLogin)
      .evaluate(function () {
        return document.querySelector(FacebookLogin);
      })
      .end()
      .then(function(button) {
        chai.expect(button.alt).to.equal('Sign up with Facebook');
        done();
      });
  });
});
