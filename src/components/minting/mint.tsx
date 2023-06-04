// import axios from "axios";
import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
import conflux from "@public/assets/conflux.png";

const Mint = () =>{
  // const router = usePathname();
  
  // const mint = router.query.mint;
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);

  // const [show, setShow] = useState(false);

  // const toggleModal = () => {
  //   setShow(true);
  //   console.log("Open modal");
  // };
  // const closeModal = () => {
  //   setShow(false);
  // };

  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const result: any = await axios.get(
  //       `https://attendify.onrender.com/${mint}`
  //     );
  //     setData(result?.data?.event);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     throw error;
  //   }
  // };


  // const claimNFT = async () => {
  //   try {

  //     await claim(address, async (res: any) => {
  //       if (!res.hash) {
  //         addToast(res.message, { appearance: "error" });
  //       }
  //       await res.wait();
  //       addToast("You have successfully minted", { appearance: "success" });
  //       router.push(`https://testnets.opensea.io/${account}`)
  //     });
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   router.isReady ? fetchData() : null;
  // }, [active, account, mint]);

  return (
      <section className="container w-[50%] mx-auto">
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
            {/* <p className="font-bold my-2 text-[#9D94B8] text-center text-2xl">{name}</p> */}
          </div>
          <div>
            <div className="flex justify-center my-6">
              <Image src={conflux} alt="nft image" />
            </div>
            

            {/* </div> */}
          </div>
        </div>

      </section>
  );
}

export default Mint;
