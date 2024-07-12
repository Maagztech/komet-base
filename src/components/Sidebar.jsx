"use client";
import React, { useContext, useState } from "react";
import { UserContext } from "@/context/userContext";
import "@/styles/Sidebar.module.css";
import { DataContext } from "@/context/dataContext";
import TeamMemberAdd from "./TeamMemberAdd";
import { BsDatabaseFillUp } from "react-icons/bs";
import { RiNftLine } from "react-icons/ri";
import { FaRocket } from "react-icons/fa";
import { GiFireZone } from "react-icons/gi";
import { FcInvite } from "react-icons/fc";
import { IoLogOut } from "react-icons/io5";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import Logo from "@/assets/kometBaseLogo.svg";
import Infra from "@/assets/infra.svg";
import Launchpad from "@/assets/lunchpad.svg";
import Dropz from "@/assets/dropz.svg";
import Dropzone from "@/assets/dropzone.svg";
import Logout from "@/assets/logout.svg";
const Sidebar = () => {
  const { userData, logoutFromKomet } = useContext(UserContext);
  const { showInvite } = useContext(DataContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="sidebar bg-white w-[265px] h-screen px-[32px] mr-[4px] pt-[24px]">
      <img src={Logo.src} alt="Komet Base" className="mb-[58px]" />
      {!userData?.address ? (
        <div
          onClick={() => router.push("/")}
          className="gradientBackground flex items-center gap-2 justify-center h-[33px] text-[14px] leading-[16.71px] text-white font-bold my-3 p-[8px] rounded mr-[40px]"
        >
          Connect Wallet
        </div>
      ) : (
        <>
          <div
            className="gradientBackground flex items-baseline gap-2 justify-center h-[33px] text-[14px] leading-[16.71px] text-white font-bold my-3 p-[8px] rounded mr-[40px]"
            onClick={(e) => setShow(!show)}
          >
            <FaUser />
            <p>
              {userData.username || String(userData.email).substring(0, 12)}{" "}
            </p>
          </div>
        </>
      )}
      <nav className="mt-[32px]">
        <ul className="sidebarul text-black">
          <li className="mb-[32px] text-[15px] text-black font-bold leading-[17.9px] cursor-pointer">
            <a
              className="flex gap-2 items-center"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Infra.src} alt="" />
              <p style={{ letterSpacing: "-1%" }}>Infra</p>
            </a>
          </li>

          <li className="mb-[32px] text-[15px] text-[#93A3AB] leading-[17.9px] font-medium cursor-pointer">
            <a
              className="flex gap-2 items-center"
              href="https://komet.me/launch_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Launchpad.src} alt="" />
              <p style={{ letterSpacing: "-1%" }}>Lunchpad</p>
            </a>
          </li>

          <li className="mb-[32px] text-[15px] text-[#93A3AB] leading-[17.9px] font-medium cursor-pointer">
            <a
              className="flex gap-2 items-center"
              href="https://dropzone.komet.me/dropz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Dropz.src} alt="" />
              <p style={{ letterSpacing: "-1%" }}>Dropz</p>
            </a>
          </li>

          <li className="mb-[32px] text-[15px] text-[#93A3AB] leading-[17.9px] font-medium cursor-pointer">
            <a
              className="flex gap-2 items-center"
              href="https://dropzone.komet.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Dropzone.src} alt="" />
              <p style={{ letterSpacing: "-1%" }}>Dropzone</p>
            </a>
          </li>

          {showInvite && (
            <li
              className="mb-[32px] flex gap-2 items-center text-[15px] text-[#93A3AB] leading-[17.9px] font-medium cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <FcInvite size={24} />
              <p style={{ letterSpacing: "-1%" }}>Invite</p>
            </li>
          )}
          <li
            className="mb-[32px] flex gap-2 items-center text-[15px] text-[#93A3AB] leading-[17.9px] font-medium cursor-pointer"
            onClick={() => {
              logoutFromKomet();
            }}
          >
            <img src={Logout.src} alt="" />
            <p style={{ letterSpacing: "-1%" }}>Logout</p>
          </li>
        </ul>
        <TeamMemberAdd
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </nav>
    </div>
  );
};

export default Sidebar;
