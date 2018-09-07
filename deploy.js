const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const mnem = require('./mnem');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  mnem,
  'https://rinkeby.infura.io/v3/4d75ee00c0bd4b288812a93ff44f054c' //rinkeby was having issues
  // 'https://ropsten.infura.io/v3/4d75ee00c0bd4b288812a93ff44f054c' //ropsten is an alternative test net
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts.length, accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["dry socks"] })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
