var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/315f46cdcf9c4d9193504fa5c771428a'));


var MyContract = new web3.eth.Contract(abi, address);
MyContract.methods.myFunction().call()
.then(console.log);

Contract.methods.myMethod(123).call({from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'})
.then(function(result)