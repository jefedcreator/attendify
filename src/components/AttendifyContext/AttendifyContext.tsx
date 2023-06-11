"use client";
import { useState, createContext, useEffect } from "react";
import attendifyAbi from "src/utils/abi";
import attendifyAddress from "src/utils/address";
import { BlockTag, createPublicClient, http } from "viem";
import { parseAbiItem } from "viem";
import { polygonMumbai } from "wagmi/chains";

interface ICreated {
  poap: string;
  creator: string;
  eventName: string;
  eventSymbol: string;
  eventUri: string;
  organizer: string;
  date: string;
  venue: string;
  category: string;
  link: string;
}

interface IMinted {
  poap: string;
  collector: string;
  eventUri: string;
}

interface IFavorites {
  poap: string;
  collector: string;
  eventUri: string;
}

const viemPublicClient = createPublicClient({
  chain: polygonMumbai,
  transport: http(),
});

const getCreated = async (): Promise<ICreated[]> => {
  const from: bigint = BigInt(36695496);
  const logs = await viemPublicClient.getLogs({
    address: attendifyAddress,
    event: parseAbiItem(
      "event createdEvents(address poap, address indexed creator,string eventName, string eventSymbol , string eventUri, string organizer, string date, string venue, string category, string link)"
    ),
    fromBlock: from,
  });

  const events = logs.map((log) => log.args);
  return events as ICreated[];
};

const getMinted = async (): Promise<IMinted[]> => {
  const from: bigint = BigInt(36695496);
  const logs = await viemPublicClient.getLogs({
    address: attendifyAddress,
    event: parseAbiItem(
      "event mintedPrezents(address poap, address indexed collector, string eventUri)"
    ),
    fromBlock: from,
  });

  const events = logs.map((log) => log.args);
  return events as IMinted[];
};

const getFavourites = async (): Promise<IFavorites[]> => {
  const from: bigint = BigInt(36695496);
  const logs = await viemPublicClient.getLogs({
    address: attendifyAddress,
    event: parseAbiItem(
      "event favouritePrezents(address poap, address indexed collector, string eventUri)"
    ),
    fromBlock: from,
  });

  const events = logs.map((log) => log.args);
  return events as IFavorites[];
};

const getEvents = async () => {
  const [created, minted, favourites] = await Promise.all([
    getCreated(),
    getMinted(),
    getFavourites(),
  ]);
  return { created, minted, favourites };
};

export const attendifyContext = createContext<any>(null);

export const Attendify = ({ children }: { children: React.ReactNode }) => {
  const [createdEvents, setCreatedEvents] = useState<ICreated[] | null>(null);
  const [mintedEvents, setMintedEvents] = useState<IMinted[] | null>(null);
  const [favoriteEvents, setFavoriteEvents] = useState<IFavorites[] | null>(
    null
  );

  useEffect(() => {
    const handleGetEvents = async () => {
      const { created, minted, favourites } = await getEvents();
      setCreatedEvents(created);
      setMintedEvents(minted);
      setFavoriteEvents(favourites);
    };
    handleGetEvents();
    return () => {};
  }, []);

  console.log("createdEvents", createdEvents);

  return (
    <attendifyContext.Provider value={{ createdEvents, setCreatedEvents }}>
      {children}
    </attendifyContext.Provider>
  );
};
