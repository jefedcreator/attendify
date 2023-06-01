import Banner from "@components/explore/Banner";
import { collectionItem } from "static/data";
import Collection from "@components/collection/Collection";

function Explore() {
  return (
    <section className="container w-[90%] mx-auto mb-32 p-4 md:p-4 lg:p-0">
      <Banner />
      <div className="grid gap-8 grid-cols-2 md:grid-cols-4 md:gap-12">
        {collectionItem.map((collection, index) => <Collection key={index} {...collection}/>)}
      </div>
    </section>
  );
}

export default Explore;
