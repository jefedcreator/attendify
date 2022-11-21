import { Contract,  Signer } from "ethers";
import { address } from "../constant";
import abi from "../abi/attendify.json";
import { Provider } from "@ethersproject/providers";
import { RpcProvider } from "@utils/helper";

export const getContract = (abi: any, address: string, signer?: Signer | Provider) => {
  const signerOrProvider = signer ?? RpcProvider
  return new Contract(address, abi, signerOrProvider)
}

export const getPoapContract = (signer?: Signer | Provider) => {
  return getContract(abi,address,signer)
};
