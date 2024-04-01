"use client";

import React from "react";
import { useAccount } from "wagmi";
import ConnectWallet from "./ConnectWallet";
import ContinuousGraph from "./ContinuousGraph";
import Sidebar from "./Sidebar";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import SmallCards from "./SmallCards";
import WalletCreationData from "./WalletCreationData";
export default function InitialCheck() {
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
            {/* {address ? ( */}
            <div>
              <SmallCards />
              <div className="flex">
                {/* <ContinuousGraph /> */}
                <WalletCreationData />

                {/* <WeekdayBarGraph /> */}
              </div>
              {/* <div className="flex">
              <UserLast30Days />
            </div>
            <div className="flex">
              <MultiLineGraph />
              <VolumesByMarketPlace />
            </div>
            <div className="flex">
              <VolumesByMarketPlace3 />
              <VolumesByMarketPlace4 />
            </div>
            <div className="flex">
              <CountryUsersPercentageChart />
              <MapChart />
            </div> */}
            </div>
            {/* ) : (<div>
            Please connect wallet to see your dashboard.
          </div>)} */}
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
    </>
  );
}
