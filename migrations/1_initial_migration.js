var Staker = artifacts.require("./Staker.sol");
var ERC20Factory = artifacts.require("./ERC20Factory.sol");
var MockERC20 = artifacts.require("./MockERC20.sol");
var Web3 = require('web3');

module.exports = async function(deployer, network, accounts) {
  // BSC addresses
  let depositToken = '0x44f13a36738d1bce9262c94e42be5b6ff8cd8bb3'; // SagaW
  let rewardToken = '0x44f13a36738d1bce9262c94e42be5b6ff8cd8bb3'; // SagaW
  
  // If deploying to dev network, create mock tokens and use them for staking contract.
  if (network == "development") {
    await deployer.deploy(ERC20Factory);
    const erc20factory = await ERC20Factory.deployed();
    await erc20factory.createToken("Eat The Blocks", "ETB");
    await erc20factory.createToken("LP ETB-BNB", "LPToken");
    const tokens = await erc20factory.getTokens()
    console.log(tokens);
    const lpToken = await MockERC20.at(tokens[1]);
    await lpToken.mint(accounts[1], Web3.utils.toWei("1000000"));
    await lpToken.mint(accounts[2], Web3.utils.toWei("1000000"));

    depositToken = tokens[1];
    rewardToken = tokens[0];
  }
  else {

  }

    await deployer.deploy(Staker, depositToken, rewardToken);
};
