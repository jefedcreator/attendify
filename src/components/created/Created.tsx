"use client";
import { useState, useContext } from "react";
import Collection from "@components/collection/Collection";
import { attendifyContext } from "@components/AttendifyContext/AttendifyContext";
import { ICreatedEvent } from "src/utils/types/types";
import CreatedModal from "@components/createdModal/CreatedModal";
import Loader from "@components/loading/loading";

const Created = () => {
  const { userCreatedEvents } = useContext(attendifyContext);
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState(0);

  if (!userCreatedEvents) {
    return <Loader />;
  }

  return (
    <div className="grid gap-8 grid-cols-2 md:grid-cols-4 md:gap-12 min-h-[50vh]">
      {userCreatedEvents &&
        userCreatedEvents.map((collection: ICreatedEvent, index: number) => (
          <Collection
            key={index}
            {...collection}
            modal={modal}
            setModal={setModal}
            id={index}
            setValue={setValue}
          />
        ))}
      {modal && <CreatedModal value={value} setModal={setModal} />}
    </div>
  );
};

export default Created;
