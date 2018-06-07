var MyToken = artifacts.require("./MyToken.sol");
var TokenERC20 = artifacts.require("./TokenERC20.sol");

module.exports = function(deployer) {
  deployer.deploy(MyToken, 100);
  deployer.deploy(TokenERC20, 100, "Token ERC20", "Token ERC20");
};
