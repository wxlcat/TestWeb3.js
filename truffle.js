/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonicWXL = "good mix violin pact awesome issue expire time hammer cinnamon tool top";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    gethhd: {
      provider: function() {
        return new HDWalletProvider(mnemonicWXL, "http://127.0.0.1:8545");
      },
      network_id: "*",
      gas: 7000000
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider("", "https://ropsten.infura.io/v3/f33e77559fd24cbd968cb16c805fe665");
      },
      network_id: '3',
      gas: 7000000,
      gasPrice: 20000000000
  } 
  }
};
