

A full-stack starter template with React & Hardhat or Truffle to develop, deploy, and test Solidity smart contracts . The starter kit also includes pre-installed ` hardhat full code`,`Truffle code`, `tailwindcss`,`Metamask SDK`, `web3.js`, etc. packages.

## 📺 Quickstart

<div align="center">
</div>

### 🔑 Private key

Ensure you create a `.env` file in the `root` directory. Then paste your [Metamask private key](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key) in `.env` with the variable name `PRIVATE_KEY` as follows:

```sh
PRIVATE_KEY=0x734...
```

### ⚙️ Compile

Now, you can write your contracts in `./contracts/` directory, replace `Greeter.sol` with `<your-contracts>.sol` file. To write tests, go to `./test` directory and create `<your-contracts>.test.js`.

```sh
npx hardhat compile

# for testing the smart contracts
npx hardhat test
```

After successful compilation, the artifacts directory will be created in `./src/artifacts` with a JSON `/contracts/<your-contracts>.sol/<your-contracts>.json` containing ABI and Bytecode of your compiled smart contracts.

Please make the changes while the JSON in `./src/app.js`.


### ⛓️ Deploy

Before deploying the smart contracts, please make sure you have a `Correct Network as ` in your Metamask wallet with sufficient funds, follow this [quickstart](https://www.npmjs.com/package/contract-wizard) guide if you do not have one.

Also, make changes in `./scripts/deploy.js` (replace the greeter contract name with `<your-contract-name>`).

For deploying the smart contracts , type the following command:

```sh
npx hardhat run scripts/deploy.js
```

Copy-paste the deployed contract address src/App.js

```sh
<your-contract> deployed to: 0x...
```

### 💻 React client

start react app

```sh
npm start
# Starting the development server...
```

Don't forget to leave a star ⭐️ ~ <a href="https://twitter.com/sambitsargam" target="_blank"><img src="https://img.shields.io/twitter/follow/sambitsargam?style=social" alt="twitter" /></a>
