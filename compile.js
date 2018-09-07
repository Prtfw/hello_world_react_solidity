const path = require('path');
const fs = require('fs');
const solc = require('solc');

const contractPath = path.resolve(__dirname, 'contracts', 'ipromise.sol');
const source = fs.readFileSync(contractPath, 'utf8');

const {interface, bytecode}=solc.compile(source, 1).contracts[':iPromise'];
console.log('interface/abi: =======>>>', ' \n', interface)
console.log('bytecode: =======>>>', ' \n', bytecode)
module.exports = solc.compile(source, 1).contracts[':iPromise'];
