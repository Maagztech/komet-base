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
import UserVisitsData from "@/components/graphs/UserVisitsData";
import VolumesByMarketPlace from "@/components/graphs/VolumeByMarketPlace";
import VolumesByMarketPlace3 from "@/components/graphs/VolumesByMarketPlace3";
import VolumesByMarketPlace4 from "@/components/graphs/VolumesByMarketPlace4";
import CountryPercentageChart from "@/components/graphs/UsersByCountry";
import MapData from "@/components/graphs/WorldMapWithDots";
export default function Analytics() {
  const { userData } = useContext(UserContext);
  const { showData } = useContext(DataContext);

  return (
    <main>
      <DesktopAlert />
      {userData?.address ? (
        <div className="flex max-h-screen">
          <Sidebar />
          <div className="flex-1 overflow-y-scroll">
            <ShowUserName />
            {showData ? (
              <div>
                <SmallCards />
                <div className="flex">
                  <WalletCreationData />
                </div>
              </div>) : (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="my-4 text-black font-bold">
                  You do not have access to any data.
                </div>
              </div>
            )}
            <div>
              <div className="flex">
                <UserLast30Days />
              </div>
              <div className="flex flex-1">
                <UserVisitsData />
                <VolumesByMarketPlace />
              </div>
              <div className="flex">
                <VolumesByMarketPlace3 />
                <VolumesByMarketPlace4 />
              </div>
              <div className="flex">
                <CountryPercentageChart />
                <MapData />
              </div>
            </div>

          </div>
        </div>
      ) : null}

    </main>
  );
}
