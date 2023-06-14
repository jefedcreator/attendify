"use client";
import { useState, useContext, useEffect } from "react";
import Collection from "@components/collection/Collection";
import { attendifyContext } from "@components/AttendifyContext/AttendifyContext";
import { ICreatedEvent, IMintedEvent } from "src/utils/types/types";
import UserCollectionModal from "@components/UserCollectionModal/UserCollectionModal";
import Loader from "@components/loading/loading";

const ExploreCollections = ({ address }: { address: string }) => {
  const { createdEvents, allMintedEvents } = useContext(attendifyContext);
  const [userCollection, setUserCollection] = useState<ICreatedEvent[] | null>(
    null
  );
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (createdEvents && allMintedEvents) {
      setUserCollection(
        createdEvents.filter((event: ICreatedEvent) =>
          allMintedEvents
            .filter((mint: IMintedEvent) => mint.collector == address)
            .some((mint: IMintedEvent) => mint.poap == event.poap)
        )
      );
    }
  }, [allMintedEvents, createdEvents, address]);

  if (!createdEvents || !allMintedEvents || !userCollection) {
    return (
      <div className="min-h-[50vh] ">
        <Loader />;
      </div>
    );
  }

  return (
    <div className="grid gap-8 grid-cols-2 md:grid-cols-4 md:gap-12 min-h-[50vh]">
      {userCollection &&
        userCollection.map((collection: ICreatedEvent, index: number) => (
          <Collection
            key={index}
            {...collection}
            modal={modal}
            setModal={setModal}
            id={index}
            setValue={setValue}
          />
        ))}
      {modal && (
        <UserCollectionModal
          address={address}
          userCollection={userCollection}
          value={value}
          setModal={setModal}
        />
      )}
    </div>
  );
};
export default ExploreCollections;
