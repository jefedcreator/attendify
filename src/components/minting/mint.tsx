import Button from "@common/Button";
import LayOut from "@layout/LayOut";
import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { usePrezent } from "web3/hooks";
import Modal from "react-modal";
import Wallet from "@components/walletPopUp/wallet";

Modal.setAppElement("#root");
function Mint() {
  const router = useRouter();
  const mint = router.query.mint;
  const { active, account } = useWeb3React();
  const { claim} = usePrezent();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();

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

  const fetchData = async () => {
    setLoading(true);
    try {
      const result: any = await axios.get(
        `https://attendify.onrender.com/${mint}`
      );
      setData(result?.data?.event);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };
  console.log(data)
  const address = data?.["creator"];
  const image = data?.["image_nft"]
  const name = data?.["title"]

  const claimNFT = async () => {
    try {

      await claim(address, async (res: any) => {
        if (!res.hash) {
          addToast(res.message, { appearance: "error" });
        }
        await res.wait();
        addToast("You have successfully minted", { appearance: "success" });
        router.push(`https://testnets.opensea.io/${account}`)
      });
    } catch (error) {}
  };

  useEffect(() => {
    router.isReady ? fetchData() : null;
  }, [active, account, mint]);
  return (
    <LayOut>
      <section className="container mx-auto mb-48 p-4 md:p-12">
        <h3 className="text-white text-center font-bold font-syne text-medium leading-sm-medium">
          Welcome to Attendify
        </h3>
        <p className="text-[#9D94B8] text-center font-medium font-jakarta text-minimal leading-sm-xx">
          You’re about to mint your Preznt for attending
          <br /> Web3 community call by Attendify.
        </p>
        <div className="w-full md:w-[50%] lg:w-[30%] my-12 mx-auto">
          {/* <div> */}
          <div>
            <p className="font-bold my-2 text-[#9D94B8] text-center text-2xl">{name}</p>
          </div>
          <div>
            <div className="flex justify-center my-6">
              <img src={image} width={192} height={192} />
            </div>
            {active ? (
              <>
                {loading ? (
                  <p className="text-white font-bold text-2xl text-center">
                    Loading
                  </p>
                ) : (
                  <>
                    <Button
                      className="text-white w-full bg-[#6E4AE7] font-jakarta font-medium w-full px-12 py-2 rounded-lg text-center mb-4"
                      label="mint prezent"
                      onClick={claimNFT}
                    />
                    <p className="my-2 text-[#9D94B8] text-center font-medium font-jakarta text-minimal leading-sm-xx">
                      Click the button to mint
                    </p>
                  </>
                )}
              </>
            ) : (
              <>
                <Button
                  onClick={toggleModal}
                  className="text-white w-full bg-[#6E4AE7] font-jakarta font-medium w-full px-12 py-2 rounded-lg text-center mb-4"
                  label="Connect Wallet"
                />
                <p className="my-2 text-[#9D94B8] text-center font-medium font-jakarta text-minimal leading-sm-xx">
                  Connect your wallet to mint Preznt
                </p>
              </>
            )}

            {/* </div> */}
          </div>
        </div>
        <Modal
          isOpen={show}
          className="border border-[#7d92b5] rounded-lg top-1/4 p-4  w-11/12 left-4 md:w-6/12 md:left-1/4 md:top-1/4 md:p-8 lg:w-3/12 lg:mx-auto absolute lg:left-[41%] lg:top-1/4 lg:p-4"
          style={customStyles}
        >
          <Wallet closeModal={closeModal} />
        </Modal>
      </section>
    </LayOut>
  );
}

export default Mint;
