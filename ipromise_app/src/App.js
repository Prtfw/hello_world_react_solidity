import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3_hijack';
import ipromise_contract from './contract_inst';



class App extends Component {

  // // #2
  // state = {
  //   didHappen: 'not sure',
  //   promise: 'hold on',
  //   balance: 'not a lot',
  //   msg: ''
  // };


// // #3
//   async componentDidMount() {
//   const didHappen = await ipromise_contract.methods.didHappen().call();
//   const promise = await ipromise_contract.methods.promise().call();
//   const accounts = await web3.eth.getAccounts()
//   const acc_bal = await web3.eth.getBalance(accounts[0])
//   this.setState({ didHappen, promise, acc_bal });
// }

// // #4
// onClick = async (evt) => {
//     evt.preventDefault();
//     const btn_id = Boolean(Number(evt.target.id))
//     const accounts = await web3.eth.getAccounts();
//     this.setState({ msg: 'Waiting on transaction success...' });
//
//     await ipromise_contract.methods.setDidHappen(btn_id).send({
//       from: accounts[0]
//     });
//
//     this.setState({ msg: 'tx succeeded' });
//   };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

       {/* #1. ====== not CRA codes ======


        <p>
          This contract status {this.state.didHappen ? "did" : "nope"}.
          The promise was "{this.state.promise}".
          Account has {this.state.acc_bal}.
        </p>
        <h2>{this.state.msg}</h2>
        <h4>confirm did or failed</h4>
        <button onClick={this.onClick} id='1'>Did</button>
        <button onClick={this.onClick} id ='0'>Fail so hard</button>


        */}
      </div>
    );
  }
}

export default App;
