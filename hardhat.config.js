require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "testnet_Polygon",
  networks: {
    testnet_Polygon: {
      chainId: 80001,
      url: "https://matic-mumbai.chainstacklabs.com/",
      accounts: [PRIVATE_KEY],
    },
    testnet_5ire: {
      chainId: 997,
      url: "https://rpc-testnet.5ire.network/",
      accounts: [PRIVATE_KEY],
    },
    testnet_Kovan: {
      chainId: 42,
      url: "https://kovan.infura.io/v3/YOUR_INFURA_PROJECT_ID",
      accounts: [PRIVATE_KEY],
    },
    testnet_Rinkeby: {
      chainId: 4,
      url: "https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID",
      accounts: [PRIVATE_KEY],
    },
    testnet_Gorli: {
      chainId: 5,
      url: "https://goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID",
      accounts: [PRIVATE_KEY],
    },
    testnet_BSC: {
      chainId: 97,
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [PRIVATE_KEY],
    },
    testnet_XDai: {
      chainId: 100,
      url: "https://rpc.xdaichain.com/",
      accounts: [PRIVATE_KEY],
    },
    testnet_Avalanche: {
      chainId: 43113,
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [PRIVATE_KEY],
    },
    testnet_Heco: {
      chainId: 256,
      url: "https://http-testnet.hecochain.com",
      accounts: [PRIVATE_KEY],
    },
    testnet_Arbitrum: {
      chainId: 421611,
      url: "https://rinkeby.arbitrum.io/rpc",
      accounts: [PRIVATE_KEY],
    },
    testnet_Celo: {
      chainId: 44787,
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [PRIVATE_KEY],
    },
    testnet_Solana: {
      chainId: 101,
      url: "https://api.testnet.solana.com",
      accounts: [PRIVATE_KEY],
    },
    testnet_Tezos: {
      chainId: 1,
      url: "https://rpcalpha.tzbeta.net/",
      accounts: [PRIVATE_KEY],
    },
    testnet_Arweave: {
      chainId: "0uAR",
      url: "https://arweave.net",
      accounts: [PRIVATE_KEY],
    },
    testnet_Fantom: {
      chainId: 4002,
      url: "https://rpc.testnet.fantom.network/",
      accounts: [PRIVATE_KEY],
    },
    testnet_IoTeX: {
      chainId: 4690,
      url: "https://babel-api.testnet.iotex.io/",
      accounts: [PRIVATE_KEY],
    },
    testnet_Metis: {
      chainId: 888,
      url: "https://testnet-swap.metis.io/",
      accounts: [PRIVATE_KEY],
    }
  },
  
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./src/artifacts",
  },
};
