import {InjectedConnector} from "@web3-react/injected-connector";
import {WalletConnectConnector} from "@web3-react/walletconnect-connector";

import { RPC_URL } from "./rpc_url";

export const pollingInterval = 12000;
export const supportedChains = [71]

export const injected = new InjectedConnector({
    supportedChainIds:supportedChains
})

export const walletConnect = new WalletConnectConnector({
    rpc:{
        71:RPC_URL[71]
    },
    qrcode:true,
    pollingInterval:pollingInterval
})