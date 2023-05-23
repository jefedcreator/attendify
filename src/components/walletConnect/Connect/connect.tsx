import React, { useState } from "react";
import Wallet from "@components/walletPopUp/wallet";
import Modal from "react-modal";
import { useWeb3React } from "@web3-react/core";

Modal.setAppElement("#root");

function Connect() {
  const { active } = useWeb3React();
  const customStyles = {
    overlay: {
      background: "rgba(3, 4, 41, 0.7)",
    },
    content: {
      borderRadius: "8px",
      backdropFilter: "blur(32px)",
      border: "1px solid rgba(125, 146, 181, 0.2)",
      backgroundColor: "background: rgba(3, 4, 41, 0.7)",
    },
  };

  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(true);
    console.log("Open modal");
  };
  const closeModal = () => {
    setShow(false);
  };
  return (
      <section className="container mx-auto mb-48 p-4 md:p-12">
        <div className="flex justify-center">
          {!active && (
            <button
              onClick={toggleModal}
              className="text-white w-full bg-[#6E4AE7] font-jakarta font-medium w-full px-12 py-2 rounded-lg text-center mb-4"
            >
              Connect wallet
            </button>
          )}

        </div>
          <p className="text-[#9D94B8] text-center font-medium font-jakarta text-minimal leading-sm-xx">Connect your wallet to view your collection</p>
        <Modal
          isOpen={show}
          className="border border-[#7d92b5] rounded-lg top-1/4 p-4  w-11/12 left-4 md:w-6/12 md:left-1/4 md:top-1/4 md:p-8 lg:w-3/12 lg:mx-auto absolute lg:left-[41%] lg:top-1/4 lg:p-4"
          style={customStyles}
        >
          <Wallet closeModal={closeModal} />
        </Modal>
      </section>
  );
}

export default Connect;
