"use client";
import { useState, createContext, useEffect } from "react";
import attendifyAddress from "src/utils/address";
import { createPublicClient, http } from "viem";
import { parseAbiItem } from "viem";
import { polygonMumbai } from "wagmi/chains";
import { useAccount } from "wagmi";
import {
  ICreatedEvent,
  IMintedEvent,
  IFavoritesEvent,
} from "src/utils/types/types";
import { fetchNftMeta } from "src/utils/helper";

const viemPublicClient = createPublicClient({
  chain: polygonMumbai,
  transport: http(),
});


const getCreated = async (): Promise<ICreatedEvent[]> => {
  const from: bigint = BigInt(36759335);
  const logs = await viemPublicClient.getLogs({
    address: attendifyAddress,
    event: parseAbiItem(
      "event createdEvents(address poap, address indexed creator,string eventName, string eventSymbol , string eventUri, string organizer, string date, string venue, string category, string link)"
    ),
    fromBlock: from,
  });

  const events = await Promise.all(
    logs.map(async (log) => {
      const ipfsRes = log?.args?.eventUri
        ? `https://ipfs.io/ipfs/${log.args.eventUri.slice(7)}`
        : "";
      let ipfsMeta = await fetchNftMeta(ipfsRes);
      return {
        ...log.args,
        eventUri: ipfsMeta?.image,
      };
    })
  );
  return events as ICreatedEvent[];
};

const getMinted = async (): Promise<IMintedEvent[]> => {
  const from: bigint = BigInt(36759335);
  const logs = await viemPublicClient.getLogs({
    address: attendifyAddress,
    event: parseAbiItem(
      "event mintedPrezents(address poap, address indexed collector, string eventUri)"
    ),
    fromBlock: from,
  });

  const events = await Promise.all(
    logs.map(async (log) => {
      const ipfsRes = log?.args?.eventUri
        ? `https://ipfs.io/ipfs/${log.args.eventUri.slice(7)}`
        : "";
      let ipfsMeta = await fetchNftMeta(ipfsRes);
      return {
        ...log.args,
        eventUri: ipfsMeta?.image,
      };
    })
  );

  return events as IMintedEvent[];
};

const getFavourites = async (): Promise<IFavoritesEvent[]> => {
  const from: bigint = BigInt(36759335);
  const logs = await viemPublicClient.getLogs({
    address: attendifyAddress,
    event: parseAbiItem(
      "event favouritePrezents(address poap, address indexed collector, string eventUri)"
    ),
    fromBlock: from,
  });

  const events = await Promise.all(
    logs.map(async (log) => {
      const ipfsRes = log?.args?.eventUri
        ? `https://ipfs.io/ipfs/${log.args.eventUri.slice(7)}`
        : "";
      let ipfsMeta = await fetchNftMeta(ipfsRes);
      return {
        ...log.args,
        eventUri: ipfsMeta?.image,
      };
    })
  );
  return events as IFavoritesEvent[];
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
  const { address } = useAccount();
  const [createdEvents, setCreatedEvents] = useState<ICreatedEvent[] | null>(
    null
  );
  const [userCreatedEvents, setUserCreatedEvents] = useState<
    ICreatedEvent[] | null
  >(null);
  const [mintedEvents, setMintedEvents] = useState<ICreatedEvent[] | null>(
    null
  );
  const [allMintedEvents, setAllMintedEvents] = useState<IMintedEvent[] | null>(
    null
  );
  const [favoriteEvents, setFavoriteEvents] = useState<
    IFavoritesEvent[] | null
  >(null);

  useEffect(() => {
    const handleGetEvents = async () => {
      const { created, minted, favourites } = await getEvents();
      setCreatedEvents(created);
      setMintedEvents(
        created.filter((event) =>
          minted
            .filter((mint) => mint.collector == address)
            .some((mint) => mint.poap == event.poap)
        )
      );
      setAllMintedEvents(minted);
      setFavoriteEvents(favourites);
      setUserCreatedEvents(created.filter((event) => event.creator == address));
    };
    handleGetEvents();
    return () => {};
  }, [address]);

  return (
    <attendifyContext.Provider
      value={{
        createdEvents,
        setCreatedEvents,
        mintedEvents,
        setMintedEvents,
        favoriteEvents,
        setFavoriteEvents,
        userCreatedEvents,
        setUserCreatedEvents,
        allMintedEvents,
      }}
    >
      {children}
    </attendifyContext.Provider>
  );
};
