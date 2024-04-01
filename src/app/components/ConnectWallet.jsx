"use client";
import React from "react";
import Export from "./Export";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
//useAccount

const ConnectWallet = () => {
  const { open } = useWeb3Modal();
  const { address } = useAccount();
  //console.log('Address',address)
  return (
    <div>
      <>
        {!address ? (
          <div className="w-full flex justify-end bg-slate-50 items-center">
            <button
              onClick={() => open()}
              className="bg-red-500 hover:bg-red-700 text-white font-bold my-3 py-2 px-4 rounded mr-[15px]"
            >
              Connect Wallet
            </button>{" "}
          </div>
        ) : (
          <div className="w-[100%] flex justify-end">
            <div className="my-3  mr-[15px]">
              <w3m-button />
            </div>
          </div>
        )}
      </>

      <div className="flex justify-between">
        <p className="mt-[40px] mb-[20px] ml-[20px]">
          Dashboard | <span className="text-red-700">Launch_</span>
        </p>
        <Export />
      </div>
    </div>
  );
};

export default ConnectWallet;
