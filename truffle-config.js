const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    bsc: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://speedy-nodes-nyc.moralis.io/0d4761affb3e494ed6f7b127/bsc/mainnet`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "0.7.6"
    }
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: '4B3DJ593AQRE1PMSDD5DMHMNZU3FZ3XUXG',
  }

};
