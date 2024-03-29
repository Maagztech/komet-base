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
export default function Home() {
  return (
    <main>
      <div className="flex max-h-screen">
        <Sidebar />
        <div className="flex-1 overflow-y-scroll">
          <ConnectWallet />
          <SmallCards />
          <div className="flex">
            <ContinuousGraph />
            <WeekdayBarGraph />
          </div>
          <div className="flex">
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
          </div>
        </div>
      </div>

    </main>
  );
}
