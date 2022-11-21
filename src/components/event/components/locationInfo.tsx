import React from "react";

const LocationInfo = () => {
  return (
    // <div className="px-8 py-8 sm:px-24 sm:py-16">
    <div className="container mx-auto">
      <h3 className="text-[#EFF1F6] font-bold text-4xl mb-4">
        About this event
      </h3>

      <div className="location w-3/4 text-[#EFF1F6] mb-4">
        <p className="text-[#9EAEC7] mb-2">Location</p>
        <p>Glover Street</p>
        <p>Lagos, LA 102273</p>
      </div>

      <div className="details">
        <p className="text-[#9EAEC7] mb-2">Details</p>
        <p className="w-full sm:w-4/6 text-[#EFF1F6] mb-2">
          Join us, in-person or virtual , from 7-8 June 2022 as we share
          transport technology investment opportunities, engage in improving the
          efficiency and sustainability of transport technology solutions in the
          Nigerian transportation sector at the maiden edition of National
          Transport Technology Conference and Exhibition. This event will bring
          key decision makers, industry experts and operators in the Road, Rail,
          Water and Air Transport sectors to discuss the current and emerging
          trends in the Smart Transportation Infrastructure as well as fashion
          out ways of integrating them into the Nigerian transportation space.
        </p>
        <p className="text-[#EFF1F6]">
          For more information please visit www.nttce.com.ng
        </p>
      </div>
    </div>
  );
};

export default LocationInfo;
