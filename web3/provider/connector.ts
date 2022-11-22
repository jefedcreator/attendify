import {InjectedConnector} from "@web3-react/injected-connector";
import {WalletConnectConnector} from "@web3-react/walletconnect-connector";
import {ExternalProvider} from "@ethersproject/providers"

import { RPC_URL } from "./rpc_url";
import { ChainId } from "@utils/helper";
declare global {
    interface Window {
      ethereum?: ExternalProvider;
    }
  }
  

export const pollingInterval = 12000;
export const supportedChains = [80001]

export const injected = new InjectedConnector({
    supportedChainIds:supportedChains
})

export const walletConnect = new WalletConnectConnector({
    rpc:{
        80001:RPC_URL[80001]
    },
    qrcode:true,
    // pollingInterval:pollingInterval
})



const BASE_POLYGONSCAN_URL = {
    [ChainId.Mainnet]:"https://polygonscan.com/",
    [ChainId.Mumbai_TestNet]:"https://mumbai.polygonscan.com/"
}

const NETWORK_CONFIG = {
    [ChainId.Mainnet]: {
      name: 'Polygonh Chain Mainnet',
      scanURL: BASE_POLYGONSCAN_URL[ChainId.Mainnet],
      rpcUrls: RPC_URL[137],
    },
    [ChainId.Mumbai_TestNet]: {
      name: 'Mumbai Chain Testnet',
      scanURL: BASE_POLYGONSCAN_URL[ChainId.Mumbai_TestNet],
      rpcUrls:  RPC_URL[80001],
    },
  }

  

// Arguemeny of type {rpc:{71:string}} is not assignable to parameter of type 'WalletConnectorArguement' object literal may only specify known properties and pollingIntervals does not exist in type WalletConnectConnectorArguemnt
/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async (chainId: number, externalProvider?: ExternalProvider) => {
    const provider:any = externalProvider || window.ethereum 
    if (!NETWORK_CONFIG[chainId]) {
      console.error('Invalid chain id')
      return false
    }
    if (provider) {
      try {
        await provider?.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${chainId?.toString(16)}` }],
        })
        return true
      } catch (switchError) {
        if ((switchError as any)?.code === 4902) {
          try {
            await provider?.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: `0x${chainId?.toString(16)}`,
                  chainName: NETWORK_CONFIG[chainId],
                  nativeCurrency: {
                    name: 'BNB',
                    symbol: 'bnb',
                    decimals: 18,
                  },
                  rpcUrls: NETWORK_CONFIG[chainId].rpcUrls,
                  blockExplorerUrls: [`${NETWORK_CONFIG[chainId].scanURL}/`],
                },
              ],
            })
            return true
          } catch (error) {
            console.error('Failed to setup the network in Metamask:', error)
            return false
          }
        }
        return false
      }
    } else {
      console.error("Can't setup the Polygon network on metamask because window.ethereum is undefined")
      return false
    }
  }