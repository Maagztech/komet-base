"use client";

import React, { useContext, useEffect } from "react";
import { useAccount } from "wagmi";
import { DataContext } from "@/context/dataContext";
import ConnectWallet from "./ConnectWallet";
import Sidebar from "./Sidebar";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import SmallCards from "./SmallCards";
import WalletCreationData from "./graphs/WalletCreationData";
import DesktopAlert from "./Alert";
export default function InitialCheck() {
  const { showData } = useContext(DataContext);
  const { address } = useAccount();
  //console.log(wagmi)
  const { open } = useWeb3Modal();

  return (
    <>
      {address ? (
        <div className="flex max-h-screen">
          <Sidebar />
          <div className="flex-1 overflow-y-scroll">
            <ConnectWallet />
            {showData ? (
              <div>
                <SmallCards />
                <div className="flex">
                  <WalletCreationData />
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="my-4 text-[black] text-bold">
                  You donot have access to any data.
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <button
            onClick={() => open()}
            className="bg-red-500 hover:bg-red-700 text-white font-bold my-8 py-2 px-4 rounded mr-[15px]"
          >
            Connect Wallet
          </button>
          <div className="my-4 text-[black] text-bold">
            Please connect wallet to continue
          </div>
        </div>
      )}
      <DesktopAlert />
    </>
  );
}
