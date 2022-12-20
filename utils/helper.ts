
import * as ipfsClient from "ipfs-http-client"
import { JsonRpcSigner, Web3Provider,StaticJsonRpcProvider } from "@ethersproject/providers";
import { RPC_URL } from "web3/provider/rpc_url";
import axios from "axios";

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


const IPFS_BASE_URL = "https://attendify.infura-ipfs.io/ipfs/"

export async function useIPFS(hash: string) {
    const res = await axios.get(`${IPFS_BASE_URL}${hash}`)
    return res.data

}



const auth =
  "Basic " +
  Buffer.from(
    `${process.env.NEXT_PUBLIC_INFURA_IFPS_PROJECT_ID}:${process.env.NEXT_PUBLIC_INFURA_IPFS_PROJECT_SECRET}`,
  ).toString("base64")

export const ipfs = ipfsClient.create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
})


export const customStyles = {
  overlay: {
    background: "rgba(3, 4, 41, 0.7)",
  },
  content: {
    borderRadius: "8px",
    backdropFilter: "blur(32px)",
    border: "1px solid rgba(125, 146, 181, 0.2)",
    backgroundColor: "background: rgba(3, 4, 41, 0.7)",
  },
};


export const fallbackCopyToClipBoard = (text:any) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
      const successful = document.execCommand("copy");
      return successful;
  } catch (err) {
      return false;
  } finally {
      document.body.removeChild(textArea);
  }
};

export const copyToClipBoard = (text:any) => {
  if (!navigator.clipboard) return fallbackCopyToClipBoard(text);
  return navigator.clipboard
      .writeText(text)
      .then(() => {
          return true;
      })
      .catch((err) => {
          console.error(err);
          return false;
      });
};