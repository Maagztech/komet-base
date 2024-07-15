'use client';
import { useContext } from "react";
import { UserContext } from "@/context/userContext";
import { DataContext } from "@/context/dataContext";
import ShowUserName from "@/components/ShowUserName";
import Sidebar from "@/components/Sidebar";
import SmallCards from "@/components/SmallCards";
import WalletCreationData from "@/components/graphs/WalletCreationData";
import DesktopAlert from "@/components/Alert";
import UserLast30Days from "@/components/graphs/UserLast30Days";
import UserVisitsData from "@/components/graphs/TokenWorth";
import VolumesByMarketPlace from "@/components/graphs/VolumeByMarketPlace";
import VolumesByMarketPlace3 from "@/components/graphs/VolumesByMarketPlace3";
import VolumesByMarketPlace4 from "@/components/graphs/VolumesByMarketPlace4";
import CountryPercentageChart from "@/components/graphs/UsersByCountry";
import dynamic from 'next/dynamic';
import TransactionPerformed from "@/components/graphs/TransactionPerformed";
import TransactionVolume from "@/components/graphs/TransactionVolume";
import TotalMintData from "@/components/graphs/TotalMintData";
const MapData = dynamic(() => import("@/components/graphs/WorldMapWithDots"), {
  ssr: false
});
export default function Analytics() {
  const { userData } = useContext(UserContext);
  const { showData } = useContext(DataContext);

  return (
    <main className="overflow-x-hidden">
      <DesktopAlert />
      {userData?.address ? (
        <div className="flex max-h-screen">
          <Sidebar />
          <div className="flex-1 overflow-y-scroll overflow-x-hidden pr-[48px]">
            <ShowUserName />
            {showData ? (
              <div>
                <SmallCards />
                <WalletCreationData />
                <TransactionPerformed />
                <TransactionVolume />
                <div className="flex flex-1 mr-[33px] w-full">
                  <TotalMintData />
                  <UserVisitsData />
                </div>
                <div className="flex mr-[33px] w-full">
                  <CountryPercentageChart />
                  <MapData />
                </div>
              </div>) : (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="my-4 text-black font-bold">
                  You do not have access to any data.
                </div>
              </div>
            )}
            <div>
            </div>

          </div>
        </div>
      ) : null}

    </main>
  );
}
