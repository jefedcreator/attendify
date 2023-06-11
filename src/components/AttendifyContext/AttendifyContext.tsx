"use client";
import { useState, createContext, useEffect } from "react";
import attendifyAddress from "src/utils/address";
import { createPublicClient, http } from "viem";
import { parseAbiItem } from "viem";
import { polygonMumbai } from "wagmi/chains";
import {
  ICreatedEvent,
  IMintedEvent,
  IFavoritesEvent,
} from "src/utils/types/types";

const viemPublicClient = createPublicClient({
  chain: polygonMumbai,
  transport: http(),
});

const getCreated = async (): Promise<ICreatedEvent[]> => {
  const from: bigint = BigInt(36695496);
  const logs = await viemPublicClient.getLogs({
    address: attendifyAddress,
    event: parseAbiItem(
      "event createdEvents(address poap, address indexed creator,string eventName, string eventSymbol , string eventUri, string organizer, string date, string venue, string category, string link)"
    ),
    fromBlock: from,
  });

  const events = logs.map((log) => log.args);
  return events as ICreatedEvent[];
};

const getMinted = async (): Promise<IMintedEvent[]> => {
  const from: bigint = BigInt(36695496);
  const logs = await viemPublicClient.getLogs({
    address: attendifyAddress,
    event: parseAbiItem(
      "event mintedPrezents(address poap, address indexed collector, string eventUri)"
    ),
    fromBlock: from,
  });

  const events = logs.map((log) => log.args);
  return events as IMintedEvent[];
};

const getFavourites = async (): Promise<IFavoritesEvent[]> => {
  const from: bigint = BigInt(36695496);
  const logs = await viemPublicClient.getLogs({
    address: attendifyAddress,
    event: parseAbiItem(
      "event favouritePrezents(address poap, address indexed collector, string eventUri)"
    ),
    fromBlock: from,
  });

  const events = logs.map((log) => log.args);
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
  const [createdEvents, setCreatedEvents] = useState<ICreatedEvent[] | null>(
    null
  );
  const [mintedEvents, setMintedEvents] = useState<IMintedEvent[] | null>(null);
  const [favoriteEvents, setFavoriteEvents] = useState<
    IFavoritesEvent[] | null
  >(null);

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
    <attendifyContext.Provider
      value={{
        createdEvents,
        setCreatedEvents,
        mintedEvents,
        setMintedEvents,
        favoriteEvents,
        setFavoriteEvents,
      }}
    >
      {children}
    </attendifyContext.Provider>
  );
};
