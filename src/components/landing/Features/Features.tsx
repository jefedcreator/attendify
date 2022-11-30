import React from "react";
import FeaturesCard from "../FeaturesCard";
import nft from "@public/assets/nft.png";
import paper from "@public/assets/paper.png";
import idea from "@public/assets/idea.png";

function Features() {
  return (
    <section className="container mx-auto">
      <div className="mt-40 md:-mt-60 lg:-mt-60">
        <div className="text-center">
          <h3 className="font-bold text-[#F8F9FB] my-4 text-28 leading-36 md:text-medium md:leading-sm-medium lg:text-medium lg:leading-sm-medium">
            How <span className="text-linear mx-2">Attendify</span>works
          </h3>
          <p className="text-[#9D94B8] text-minimal leading-sm-xx md:text-minimal md:leading-sm-xx lg:text-minimal lg:leading-sm-xx">
            Get your community members to own NFTs for your events and
            <br /> activities in 3 easy steps
          </p>
        </div>

        <div className="grid gap-12 md:grid md:grid-cols-3  md:gap-8 lg:grid lg:grid-cols-3 lg:gap-8 my-8">
          <FeaturesCard
            src={idea}
            title={"Create your event on Attendify"}
            description={
              "Give a few details we need to create to create your Event’s NFT"
            }
            alt={"idea-image"}
          />
          <FeaturesCard
            src={paper}
            title={"Share your unique link"}
            description={
              "Give a few details we need to create to create your Event’s NFT"
            }
            alt={"paper-placeholder"}
          />
          <FeaturesCard
            src={nft}
            title={"Mint NFTs"}
            description={
              "With the link, your community members can mint free NFTs."
            }
            alt={"mint-placeholder"}
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
