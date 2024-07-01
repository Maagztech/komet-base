'use client';

import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import { DataContext } from "@/context/dataContext";
import ConnectWallet from "@/components/ConnectWallet";
import Sidebar from "@/components/Sidebar";
import SmallCards from "@/components/SmallCards";
import WalletCreationData from "@/components/WalletCreationData";

export default function Analytics() {
  const { userData } = useContext(UserContext);
  const { showData } = useContext(DataContext);

  return (
    <main>
      {userData?.address ? (
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
                <div className="my-4 text-black font-bold">
                  You do not have access to any data.
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </main>
  );
}
