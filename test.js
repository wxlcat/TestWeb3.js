
var Web3 = require('web3');
var web3 = new Web3('ws://127.0.0.1:7545');
web3.eth.getBalance("0x5dca0fD7dc428fF7Af36513696CeaF6970312d65").then(
    console.log
);
