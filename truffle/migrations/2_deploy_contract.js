const Parent_Contract = artifacts.require("Parent");

module.exports = function(deployer) {
  deployer.deploy(Parent_Contract);
};