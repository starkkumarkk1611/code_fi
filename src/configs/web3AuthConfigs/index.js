const web3AuthConfig = {
     chainId: '0x5',
     authProviderConfig: {
          rpcTarget: `https://goerli.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`, // Add your RPC e.g. https://goerli.infura.io/v3/<your project id>
          clientId: process.env.REACT_APP_WEB3_AUTH_CLIENT_ID, // Add your client id. Get it from the Web3Auth dashboard
          network: 'testnet', // The network to use for the Web3Auth modal. Use 'testnet' while developing and 'mainnet' for production use
          theme: 'dark', // The theme to use for the Web3Auth modal
          modalConfig: {
               // The modal config is optional and it's used to customize the Web3Auth modal
               // Check the Web3Auth documentation for more info: https://web3auth.io/docs/sdk/web/modal/whitelabel#initmodal
          }
     }
}

export default web3AuthConfig;