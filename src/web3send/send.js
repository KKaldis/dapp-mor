const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const MNEMONIC =
  "muffin endless flat clown fatal hurt inform figure night endorse ostrich slam";
const wsProvider = new Web3.providers.WebsocketProvider(
  "HTTP://127.0.0.1:7545"
);
let provider = new HDWalletProvider({
  mnemonic: {
    phrase: MNEMONIC,
  },
  providerOrUrl: wsProvider,
});

const web3 = new Web3(provider);

web3.eth
  .sendTransaction({
    from: "0x0b60536035C4cE972190bE356003742F1e054557",
    to: "0x7Eb6173eA0Fc5ae5EeA2a902d2707001367B27d4",
    data: web3.utils.toHex("coinclarified.com"),
  })
  .catch((err) => {
    throw err;
  });
