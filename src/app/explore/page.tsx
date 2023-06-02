import Banner from "@components/explore/Banner";
import Collections from "@components/collections/Collections";

function Explore() {
  return (
    <section className="container w-[90%] mx-auto mb-32 p-4 md:p-4 lg:p-0 relative">
      <Banner header="Explore Collection" address="0x123" isDashboard={false}/>
      <Collections/>
    </section>
  );
}

export default Explore;
