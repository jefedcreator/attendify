"use client";
import { useState } from "react";
import { collectionItem } from "static/data";
import Collection from "@components/collection/Collection";
import CollectionModal from "@components/collectionModal/CollectionModal";

type ValueType = number | null;

const Collections = () => {
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <div className="grid gap-8 md:grid-cols-4 md:gap-12">
      {collectionItem.map((collection, index) => (
        <Collection
          key={index}
          {...collection}
          modal={modal}
          setModal={setModal}
          id={index}
          setValue={setValue}
        />
      ))}
      {modal && <CollectionModal value={value} setModal={setModal}/>}
    </div>
  );
};

export default Collections;
