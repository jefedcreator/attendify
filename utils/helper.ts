import { JsonRpcSigner, Web3Provider,StaticJsonRpcProvider } from "@ethersproject/providers";
import { RPC_URL } from "web3/provider/rpc_url";

export const shortenAddress = (address:string) => {
    if (!address) return null;
    return `${address.substr(0, 6)}...${address.substr(
        address.length - 4,
        address.length
    )}`;
};
export const isPositiveInt = (value:string) => /^\+?([1-9]\d*)$/.test(value);

// account is not optional
export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
    return library.getSigner(account).connectUnchecked()
  }

export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
    return account ? getSigner(library, account) : library
  }

  export const RpcProvider = new StaticJsonRpcProvider(RPC_URL[80001])

 export enum ChainId {
    Mumbai_TestNet=80001,
    Mainnet =137
}

export const epoch = (data:any) =>{
    return Date.parse(data)
}