"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import wallet from "@public/assets/empty-wallet.png";
import { IConnect } from "src/utils/types/types";

const Connect = ({ isMintPage }: IConnect) => {
  return (
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
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

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
            className={`${
              isMintPage ? "md:w-1/2" : "md:w-1/3"
            } w-[80%] mx-auto p-2`}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="bg-purple-600 border-2 border-purple-400 rounded-lg w-full text-[#F9F8FB] font-jarkata flex items-center justify-center py-3 gap-2"
                  >
                    <Image src={wallet} alt="crypto wallet icon" />
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div
                  style={{ display: "flex", gap: 12, justifyContent: "center" }}
                >
                  <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 30,
                          height: 30,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
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
                    {/* {chain.name} */}
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
  );
};

export default Connect;
