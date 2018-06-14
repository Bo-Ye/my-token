var TokenERC20 = artifacts.require("TokenERC20");

contract('TokenERC20', function (accounts) {
  it("should be 90 * 10 ** 18 tokens after burning 10 * 10 ** 18 tokens", function () {
    var tokenERC20;
    return TokenERC20.deployed().then(function (instance) {
      tokenERC20 = instance;
      return tokenERC20.burn(10 * 10 ** 18, { from: accounts[0] });
    }).then(function (success) {
      return tokenERC20.balanceOf.call(accounts[0]);
    }).then(function (balance) {
      assert.equal(balance.toNumber(), 90 * 10 ** 18, "Account[0] should have 90 * 10 ** 18 tokens after burning 10 * 10 ** 18 tokens");
    }).then(function () {
      return tokenERC20.totalSupply.call();
    }).then(function (totalSupply) {
      assert.equal(totalSupply.toNumber(), 90 * 10 ** 18, "Total supply should be 90 * 10 ** 18 tokens after burning 10 * 10 ** 18 tokens");
    });
  });

  it("should send 10 * 10 ** 18 tokens to account[1] from account[0]", function () {
    var tokenERC20;
    return TokenERC20.deployed().then(function (instance) {
      tokenERC20 = instance;
      tokenERC20.transfer(accounts[1], 10 * 10 ** 18, { from: accounts[0] });
    }).then(function () {
      return tokenERC20.balanceOf.call(accounts[0]);
    }).then(function (balance) {
      assert.equal(balance.toNumber(), 80 * 10 ** 18, "Account[0] should have 80 * 10 ** 18 tokens after sending 10 * 10 ** 18 tokens");
    }).then(function () {
      return tokenERC20.balanceOf.call(accounts[1]);
    }).then(function (balance) {
      assert.equal(balance.toNumber(), 10 * 10 ** 18, "Account[1] should have 10 * 10 ** 18 tokens after receiving 10 * 10 ** 18 tokens");
    }).then(function () {
      return tokenERC20.totalSupply.call();
    }).then(function (totalSupply) {
      assert.equal(totalSupply.toNumber(), 90 * 10 ** 18, "Total supply should not change after transferring tokens");
    });
  });
});
