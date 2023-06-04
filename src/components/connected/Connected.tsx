import attendify from "@public/assets/attendify.svg";
import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import DropDown from "@components/dropdown/DropDown";

const Connected = () => {
  return (
    <header className="w-[90%] mx-auto py-5 h-[15vh] md:h-[20vh]">
      <div className="flex items-center justify-between">
        <div className="w-[30%] md:w-1/2 object-contain">
          <Link href="/">
            <Image
              src={attendify}
              alt="attendify-logo"
              className="w-[70%] md:w-full object-cover"
            />
          </Link>
        </div>
        <div className="w-[55%] md:w-[22%] flex items-center justify-end">
          <ConnectButton.Custom>
            {({ account, openAccountModal, authenticationStatus, mounted }) => {
              // Note: If your app doesn't use authentication, you
              // can remove all 'authenticationStatus' checks
              const ready = mounted && authenticationStatus !== "loading";

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
                  className="w-[70%] md:w-[60%]"
                >
                  {(() => {
                    return (
                      <div
                        style={{ display: "flex", gap: 12 }}
                        className="w-full"
                      >
                        <button
                          onClick={openAccountModal}
                          type="button"
                          className="bg-[#6E4AE7] text-[#F9F8FB] border-2 border-purple-400 rounded-lg font-jakarta p-2 md:p-3"
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
          <DropDown />
        </div>
      </div>
    </header>
  );
};

export default Connected;
