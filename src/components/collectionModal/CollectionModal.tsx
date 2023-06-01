import { collectionItem } from "static/data";

type ValueType = number | null;

interface IModal {
  value: number;
}

const CollectionModal = ({ value }: IModal) => {
  const item = collectionItem[value] ?? {}; // Use empty object as a fallback
  return (
    <div className="bg-gradient-to-b from-[rgba(0, 9, 31, 0.98)] via-[rgba(30, 12, 90, 0.92)] to-transparent border border-solid border-blue-500 border-opacity-20 absolute h-40 w-40 text-white top-10">
      <h1>{item.name}</h1>
      <p>{item.organizer}</p>
      <p>{item.date}</p>
    </div>
  );
};

export default CollectionModal;
