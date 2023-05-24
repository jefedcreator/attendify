// import Connect from "@components/walletConnect/Connect/connect";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import connect from "@public/assets/wallets.png";

function WalletConnect() {
  return (
    <section className="container mx-auto mb-48 p-4 md:p-12">
      <div className="flex justify-center my-4">
        <Image src={connect} alt="wallet" />
      </div>
      <h3 className="text-white text-center font-bold font-syne text-medium leading-sm-medium">
        Welcome
      </h3>
      <p className="text-[#9D94B8] text-center font-medium font-jakarta text-minimal leading-sm-xx">
        Welcome to Attendify. You can mint Preznts,
        <br /> browse through your collection of Preznts.
      </p>
      <div className="flex justify-center my-6">
        <div>
          {/*           <Tab.Group>
              <Tab.List className={"text-center space-x-6 my-4"}>
                <Tab>
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. 
                    <button
                      className={
                        selected
                          ? "underline underline-offset-8 decoration-2 decoration-[#B5179E] text-white"
                          : "underline underline-offset-8 decoration-2 decoration-[#5E547F] text-[#BDB7CF]"
                      }
                    >
                      Connect Wallet
                    </button>
                  )}
                </Tab>
                <Tab>
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. 
                    <button
                      className={
                        selected
                          ? "underline underline-offset-8 decoration-2 decoration-[#B5179E] text-white"
                          : "underline underline-offset-8 decoration-2 decoration-[#5E547F] text-[#BDB7CF]"
                      }
                    >
                      Explore Wallet
                    </button>
                  )}
                </Tab>
                ... 
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>

                </Tab.Panel>
                <Tab.Panel>
                  <Explore/>
                </Tab.Panel>
                ...
              </Tab.Panels>
            </Tab.Group> */}
        </div>
      </div>
    </section>
  );
}

export default WalletConnect;
