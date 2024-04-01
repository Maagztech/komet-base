import Image from "next/image";
import Sidebar from './components/Sidebar';
import ConnectWallet from "./components/ConnectWallet";
import SmallCards from "./components/SmallCards";
import ContinuousGraph from "./components/ContinuousGraph";
import MultiLineGraph from "./components/VolumeByMarketPlace";
import VolumesByMarketPlace from "./components/VolumesByMarketplace2";
import VolumesByMarketPlace3 from "./components/VolumesByMarketPlace3";
import VolumesByMarketPlace4 from "./components/VolumesByMarketPlace4";
import CountryUsersPercentageChart from "./components/UsersByCountry";
import MapChart from "./components/WorldMapWithDots";
import WeekdayBarGraph from "./components/User Visits";
import UserLast30Days from "./components/UserLast30Days";
import { useAccount } from 'wagmi'
export default function Home() {
  const { address } = useAccount()
  return (
    <main>

      <div className="flex max-h-screen">
        <Sidebar />

        <div className="flex-1 overflow-y-scroll">
          <ConnectWallet />
          {address ? (
            <div>
              <SmallCards />
              <div className="flex">
                <ContinuousGraph />
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
          ) : (<div>
            Please connect wallet to see your dashboard.
          </div>)}
        </div>
      </div>
    </main >
  );
}
