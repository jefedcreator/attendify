import attendify from "@public/assets/attendify.svg";
import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Connected = () => {
  return (
    <header className="p-6 md:p-12 lg:p-12">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <Image src={attendify} alt="attendify-logo" />
          </Link>
        </div>
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready = mounted && authenticationStatus !== "loading";
            // const connected =
            //   ready &&
            //   account &&
            //   chain &&
            //   (!authenticationStatus ||
            //     authenticationStatus === "authenticated");

            return (
              <div
                {...(!ready && {
                  "aria-hidden": true,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                })}
                // className="w-[40%]"
              >
                {(() => {
                  //   if (!connected) {
                  //     return (
                  //       <button onClick={openConnectModal} type="button">
                  //         Connect Wallet
                  //       </button>
                  //     );
                  //   }

                  //   if (chain.unsupported) {
                  //     return (
                  //       <button onClick={openChainModal} type="button">
                  //         Wrong network
                  //       </button>
                  //     );
                  //   }

                  return (
                    <div
                      style={{ display: "flex", gap: 12 }}
                      className="w-full"
                    >
                      <button
                        onClick={openChainModal}
                        style={{ display: "flex", alignItems: "center" }}
                        // className="w-[30%]"
                        type="button"
                      >
                        {chain?.hasIcon && (
                          <div
                            style={{
                              background: chain?.iconBackground,
                              width: 30,
                              height: 30,
                              borderRadius: 999,
                              overflow: "hidden",
                              marginRight: 4,
                            }}
                          >
                            {chain?.iconUrl && (
                              <Image
                                alt={chain.name ?? "Chain icon"}
                                src={chain.iconUrl}
                                // style={{ width: 12, height: 12 }}
                                width={100}
                                height={100}
                              />
                            )}
                          </div>
                        )}
                        {/* {chain?.name} */}
                      </button>

                      <button
                        onClick={openAccountModal}
                        type="button"
                        className="bg-[#6E4AE7] text-[#F9F8FB] border-2 border-purple-400 rounded-lg font-jakarta p-3"
                      >
                        {account?.displayName}
                        {account?.displayBalance
                          ? ` (${account.displayBalance})`
                          : ""}
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
        {/* <Hamburger /> */}
      </div>
    </header>
  );
};

export default Connected;
