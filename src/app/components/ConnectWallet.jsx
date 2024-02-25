import React from "react";

const ConnectWallet = () => {
  return (
    <div>
      <div className="w-full flex justify-end bg-slate-50">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold my-3 py-2 px-4 rounded mr-[15px]">
          Connect Wallet
        </button>
      </div>
      <p className="mt-[40px] mb-[20px] ml-[20px]">Dashboard | <span className="text-red-700">Launch_</span></p>
    </div>
  );
};

export default ConnectWallet;
