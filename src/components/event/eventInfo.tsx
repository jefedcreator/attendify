import Head from "next/head";
import LocationInfo from "./components/locationInfo";
import Similar from "./components/similar";
import TopInfo from "./components/topInfo";
// import HeaderMetaData from "../../common/MetaData/HeaderMetaData";

const eventInfo = () => {
  return (
    <section className="p-8 lg:p-0">
     {/* <HeaderMetaData/> */}
      <TopInfo />
      <LocationInfo />
      <Similar />
    </section>
  );
};

export default eventInfo;
