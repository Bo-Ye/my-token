var MyToken = artifacts.require("MyToken");

contract('MyToken', function(accounts) {
  it("should put 100 tokens in the first account", function() {
    return MyToken.deployed().then(function(instance) {
      return instance.balanceOf.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 100, "100 wasn't in the first account");
    });
  });
});
