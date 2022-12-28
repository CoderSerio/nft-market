const NftMarket = artifacts.require("NftMarket"); // eslint-disable-line

module.exports = function (deployer) {
  deployer.deploy(NftMarket);
};
