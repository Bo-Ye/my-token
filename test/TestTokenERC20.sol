pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/TokenERC20.sol";

contract TestTokenERC20 {
  function testInitialBalanceUsingDeployedContract() {
    TokenERC20 tokenERC20 = TokenERC20(DeployedAddresses.TokenERC20());
    uint256 expected = 100 * 10 ** 18;
    Assert.equal(tokenERC20.balanceOf(tx.origin), expected, "Owner should have 100 * 10 ** 18 tokens initially");
  }
}
