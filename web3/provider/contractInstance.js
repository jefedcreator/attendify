import { Contract, ethers } from "ethers";
import {address} from "../constant";
import abi from "../abi/attendify.json"

export const getPoap = (address,signOrProvider) =>{
    return new ethers.Contract(address,abi,signOrProvider)
}