import Button from "@common/Button";
import { copyToClipBoard } from "@utils/helper";
import useRouter from "next/router";
import React, { useState } from "react";
import QRCode from "react-qr-code";
import { useToasts } from "react-toast-notifications";

function SuccessModal({ path }: any) {
  const { addToast } = useToasts();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  let copy = `${origin}/mint/${path}`;
  const copyToClipBoardHandler = async () => {
    let path = window.location.href;
    const success = await copyToClipBoard(copy);
    if (success) {
      addToast("Copied to clipboard", {
        appearance: "success",
      });
    } else {
      addToast("Not Copied", {
        appearance: "error",
      });
    }
  };
  return (
    <section>
      <div className="flex justify-center my-4">
        <img src={"/assets/cheers.svg"} alt="jubilee" />
      </div>
      <div className="text-center text-[#9D94B8]">
        <h3 className="text-white font-bold my-2">
          Event created successfully
        </h3>
        <p>
          You can now share the link for your attendees
          <br /> to mint preznts on Attendify
        </p>
      </div>

      <div className="flex justify-center mx-auto my-8 ">
        <QRCode
          size={300}
          bgColor="#ffff"
          className="flex  justify-center"
          value={`${origin}/mint/${path}`}
        />
      </div>

      <div>
        <p className="text-[#9D94B8] text-center">Mint Link</p>

        <div className="flex items-center justify-center space-x-4">
          <p className="text-[#9D94B8] my-2 truncate">{`${origin}/mint/${path}`}</p>
          <div onClick={copyToClipBoardHandler} className="cursor-pointer">
            <img src="/assets/copy.svg" alt="copy" />
          </div>
        </div>
      </div>

      <Button
        href={`${origin}/mint/${path}`}
        label="continue"
        className="w-[100%] lg:w-[100%]  border-solid border-2 border-[#bba9f4]  bg-[#6E4AE7]  text-white mt-6 p-2"
      />
    </section>
  );
}

export default SuccessModal;
