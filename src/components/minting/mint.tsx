import Button from "@common/Button";
import LayOut from "@layout/LayOut";
import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { usePrezent } from "web3/hooks";

function Mint() {
  const router = useRouter();
  const mint = router.query.mint;
  const { active, account } = useWeb3React();
  const { claim,contract } = usePrezent();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
       const {addToast} =   useToasts()

       console.log(contract)
  const fetchData = async () => {
    setLoading(true);
    try {
      const result: any = await axios.get(
        `https://attendifyapi.herokuapp.com/${mint}`
      );
      setData(result?.data?.event);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };
  const address = data?.["creator"]

  const claimNFT = async () =>{
    console.log("hellp")
    try {
      console.log("hi")
      await claim(address, async(res:any) =>{
        if(!res.hash){
          addToast(res.message, {appearance:"error"})
        }
        await res.wait()
        addToast("You have successfully minted", {appearance:"success"})
      })
    } catch (error) {
      
    }
  }

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
            <div className="flex justify-center my-6">
              <Image src="/assets/mint.png" width={192} height={192} />
            </div>
            {active ? (
              <>
                {loading ? (
                  <p className="text-white font-bold text-2xl text-center">Loading</p>
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
      </section>
    </LayOut>
  );
}

export default Mint;
