# hello_world_react_solidity
repo for talk: deploy your first blockchain app with react front end

- install packages (yarn install / npm install) in main repo
- signup for metamask account (chrome plugin)
- update mnemonic in mnem.js with your own from meta-mask (required by path in deploy.js, make a new .js file in the main directory with your own mnemonic like this: module.exports = 'PUT YOUR MNEMONIC HERE...')

...optional...
- update infura endpoint to your own by creating project with your infura account
- get some test ether from faucet for your own Metamask accounts via https://faucet.rinkeby.io/ (sign up for metamask account first and choose a testnet (make sure the endpoint is for the the same testnet for infura) (I used Rinkeby)
- run deploy.js
- copy new contract address and update contract_instance.js in ipromise_app/src

...end of optional...

- install packages (yarn install / npm install) in ./ipromise_app
- npm / yarn start and navigate to localhost:3000

poke around + have fun (you need to have installed and signed-in to your metamask chrome plugin for the frontend to work)
