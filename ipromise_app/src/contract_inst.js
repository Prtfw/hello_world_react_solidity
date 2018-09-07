import web3 from './web3_hijack';

const addy = '0x0d4924EA6e4CfE1b3C4762fB2627004bC8b2C831'; // Update addy after deploy

const abi = [{
    "constant": false,
    "inputs": [{
        "name": "YN",
        "type": "bool"
    }],
    "name": "setDidHappen",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "promise",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "didHappen",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "name": "_promise",
        "type": "string"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}];

export default new web3.eth.Contract(abi, addy);
