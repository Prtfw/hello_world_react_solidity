pragma solidity ^0.4.17; // specify what version of Ethereum Compiler

contract iPromise {
    string public promise;  // Public String (storage var)
    bool public didHappen;  // Public Bool (storage var)

    constructor(string _promise) public { // a contructor that initates the contract instance with 1 string variable
        promise = _promise;
        didHappen = false;    // Notice scope rules is similar to plain JS
    }
    function setDidHappen(bool YN) public { // this function is callable by 3rd party and takes a bool param
        didHappen = YN;     // sets contract state/storage var
    }
}
