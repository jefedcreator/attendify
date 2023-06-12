import { usePrepareContractWrite } from "wagmi";
import { IEventDetails, ICreated } from "src/utils/types/types";
import attendifyAbi from "../abi";
import attendifyAddress from "../address";

export const usePrepareContractWriteWithUri = (uri:string,eventDetails:any, onSuccess:any) =>{
    const { config } = usePrepareContractWrite({
      address: attendifyAddress,
      abi: attendifyAbi,
      functionName: "createEvent",
      args: [
        eventDetails.title,
        eventDetails.symbol,
        uri,
        eventDetails.organizer,
        eventDetails.date,
        eventDetails.venue,
        eventDetails.category,
        eventDetails.link,
      ],
      onSuccess,
    });
  
    return config;
  }
