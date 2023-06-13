"use client";
import { useState, useContext } from "react";
import Collection from "@components/collection/Collection";
import CollectionModal from "@components/collectionModal/CollectionModal";
import { attendifyContext } from "@components/AttendifyContext/AttendifyContext";
import { ICreatedEvent } from "src/utils/types/types";

const Collections = () => {
  const { mintedEvents } = useContext(attendifyContext);
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState(0);

  if (!mintedEvents) {
    return <p className="text-white text-center">Loading...</p>
  }

  return (
    <div className="grid gap-8 grid-cols-2 md:grid-cols-4 md:gap-12 min-h-[50vh]">
      {mintedEvents &&
        mintedEvents.map((collection: ICreatedEvent, index: number) => (
          <Collection
            key={index}
            {...collection}
            modal={modal}
            setModal={setModal}
            id={index}
            setValue={setValue}
          />
        ))}
      {modal && <CollectionModal value={value} setModal={setModal} />}
    </div>
  );
};

export default Collections;
