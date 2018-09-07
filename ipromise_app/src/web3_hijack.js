import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider); // get the settings from metamask but use our specific web3 version (v1 not v0)

export default web3;
