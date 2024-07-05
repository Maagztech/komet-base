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
const Sidebar = () => {
  const { userData, logoutFromKomet } = useContext(UserContext);
  const { showInvite } = useContext(DataContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="sidebar bg-slate-50 max-w-[300px]  h-screen p-[30px] mr-[4px]">
      <div className="pt-[10px]">
        <svg
          width="180"
          height="26"
          viewBox="0 0 180 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.24 24.9021C16.92 24.9021 16.504 24.4968 15.992 23.6861C15.48 22.8541 14.7653 21.5421 13.848 19.7501C13.0587 18.2141 12.3973 16.9768 11.864 16.0381C11.3307 15.0994 10.8187 14.3208 10.328 13.7021L7.48 16.9661V22.6621L10.232 23.0141V24.9021H0.28V22.9821L2.808 22.6621V3.5261L0.312 3.1101V1.1261H9.944V3.1101L7.48 3.5261V13.9581L15.896 3.5261L13.272 3.1101V1.1261H21.912V3.1101L19.256 3.5261L13.048 10.5021C13.7947 11.1848 14.584 12.1554 15.416 13.4141C16.248 14.6514 17.2613 16.2728 18.456 18.2781C19.3307 19.7501 19.992 20.8274 20.44 21.5101C20.888 22.1714 21.2293 22.5554 21.464 22.6621L22.968 23.0141V24.9021H17.24ZM24.315 16.0381C24.315 14.0328 24.7097 12.3261 25.499 10.9181C26.3097 9.5101 27.387 8.4541 28.731 7.7501C30.075 7.02477 31.5363 6.6621 33.115 6.6621C35.803 6.6621 37.8723 7.4941 39.323 9.1581C40.795 10.8008 41.531 13.0408 41.531 15.8781C41.531 17.9048 41.1257 19.6328 40.315 21.0621C39.5257 22.4701 38.459 23.5261 37.115 24.2301C35.7923 24.9128 34.331 25.2541 32.731 25.2541C30.0643 25.2541 27.995 24.4328 26.523 22.7901C25.051 21.1261 24.315 18.8754 24.315 16.0381ZM32.987 23.1741C35.3977 23.1741 36.603 20.8488 36.603 16.1981C36.603 13.7661 36.315 11.9208 35.739 10.6621C35.163 9.3821 34.2243 8.7421 32.923 8.7421C30.4483 8.7421 29.211 11.0674 29.211 15.7181C29.211 18.1501 29.5097 20.0061 30.107 21.2861C30.7257 22.5448 31.6857 23.1741 32.987 23.1741ZM44.44 22.9821L46.232 22.6941V10.1501L44.184 9.5741V7.3661L49.496 6.6941L49.88 6.9501L50.36 8.0061V9.3501C51.064 8.66743 52.0667 8.0701 53.368 7.5581C54.6907 7.02477 55.832 6.7581 56.792 6.7581C57.944 6.7581 58.872 6.9501 59.576 7.3341C60.3013 7.7181 60.8453 8.31543 61.208 9.1261C61.912 8.4861 62.84 7.93143 63.992 7.4621C65.144 6.99277 66.2747 6.7581 67.384 6.7581C69.2827 6.7581 70.6267 7.31277 71.416 8.4221C72.2053 9.53143 72.6 11.3448 72.6 13.8621V22.6941L74.68 22.9821V24.9021H66.392V22.9821L68.056 22.6941V13.9901C68.056 12.3261 67.8533 11.1634 67.448 10.5021C67.064 9.81943 66.3173 9.4781 65.208 9.4781C64.6107 9.4781 63.992 9.61677 63.352 9.8941C62.7333 10.1501 62.1787 10.4701 61.688 10.8541C61.8373 11.6648 61.912 12.6781 61.912 13.8941V22.6941L63.896 22.9821V24.9021H55.544V22.9821L57.304 22.6941V13.8941C57.304 12.7848 57.2293 11.9208 57.08 11.3021C56.952 10.6621 56.696 10.2034 56.312 9.9261C55.928 9.62743 55.3733 9.4781 54.648 9.4781C53.9653 9.4781 53.2827 9.6381 52.6 9.9581C51.9387 10.2568 51.3413 10.6194 50.808 11.0461V22.6941L52.696 22.9821V24.9021H44.44V22.9821ZM84.9102 25.2541C82.0942 25.2541 79.9929 24.4328 78.6062 22.7901C77.2409 21.1261 76.5582 18.8648 76.5582 16.0061C76.5582 14.0861 76.9102 12.4221 77.6142 11.0141C78.3396 9.6061 79.3529 8.52877 80.6542 7.7821C81.9556 7.03543 83.4596 6.6621 85.1662 6.6621C87.2996 6.6621 88.9422 7.22743 90.0942 8.3581C91.2462 9.46743 91.8436 11.0568 91.8862 13.1261C91.8862 14.5341 91.8009 15.5794 91.6302 16.2621H81.2302C81.3156 18.2034 81.7742 19.7181 82.6062 20.8061C83.4382 21.8728 84.6222 22.4061 86.1582 22.4061C86.9902 22.4061 87.8436 22.2674 88.7182 21.9901C89.6142 21.7128 90.3182 21.3821 90.8302 20.9981L91.6302 22.7581C91.0542 23.3768 90.1156 23.9528 88.8142 24.4861C87.5342 24.9981 86.2329 25.2541 84.9102 25.2541ZM87.4062 14.3421C87.4489 13.7448 87.4702 13.2861 87.4702 12.9661C87.4702 10.1288 86.5209 8.7101 84.6222 8.7101C83.5769 8.7101 82.7662 9.1261 82.1902 9.9581C81.6142 10.7901 81.2942 12.2514 81.2302 14.3421H87.4062ZM99.816 25.1901C98.472 25.1901 97.48 24.8808 96.84 24.2621C96.2 23.6434 95.88 22.6621 95.88 21.3181V9.5741H93.8V7.9101C93.9707 7.8461 94.28 7.73943 94.728 7.5901C95.176 7.41943 95.5173 7.28077 95.752 7.1741C96.1147 6.89677 96.424 6.41677 96.68 5.7341C96.872 5.2861 97.224 4.17677 97.736 2.4061H100.296L100.424 7.1101H105.32V9.5741H100.456V18.5661C100.456 19.7608 100.488 20.6034 100.552 21.0941C100.616 21.5848 100.755 21.9048 100.968 22.0541C101.181 22.1821 101.555 22.2461 102.088 22.2461C102.621 22.2461 103.176 22.1928 103.752 22.0861C104.328 21.9581 104.808 21.8088 105.192 21.6381L105.8 23.4301C105.203 23.8781 104.328 24.2834 103.176 24.6461C102.024 25.0088 100.904 25.1901 99.816 25.1901Z"
            fill="#FF4083"
          />
          <path
            d="M109.838 3.5261L107.342 3.1101V1.1261H112.11C112.836 1.1261 113.774 1.08343 114.926 0.9981C115.204 0.976767 115.534 0.955434 115.918 0.934101C116.302 0.912766 116.75 0.902099 117.262 0.902099C120.484 0.902099 122.734 1.36077 124.014 2.2781C125.316 3.1741 125.966 4.5181 125.966 6.3101C125.966 7.88877 125.486 9.21143 124.526 10.2781C123.588 11.3234 122.35 11.9634 120.814 12.1981C122.926 12.1768 124.58 12.6568 125.774 13.6381C126.99 14.6194 127.598 15.9848 127.598 17.7341C127.598 19.9528 126.82 21.7341 125.262 23.0781C123.705 24.4221 121.102 25.0941 117.454 25.0941C116.494 25.0941 115.609 25.0621 114.798 24.9981C114.585 24.9981 114.222 24.9768 113.71 24.9341C113.198 24.9128 112.676 24.9021 112.142 24.9021H107.31V22.9821L109.838 22.6621V3.5261ZM114.478 11.4941C114.713 11.5154 115.193 11.5261 115.918 11.5261H117.422C118.724 11.5261 119.694 11.1208 120.334 10.3101C120.974 9.49943 121.294 8.3581 121.294 6.8861C121.294 5.4781 120.964 4.4541 120.302 3.8141C119.641 3.1741 118.542 2.8541 117.006 2.8541C116.601 2.8541 115.758 2.89677 114.478 2.9821V11.4941ZM114.478 22.7901C114.969 22.9821 115.908 23.0781 117.294 23.0781C119.108 23.0781 120.42 22.6514 121.23 21.7981C122.041 20.9448 122.446 19.7074 122.446 18.0861C122.446 16.5288 122.073 15.4194 121.326 14.7581C120.601 14.0754 119.438 13.7341 117.838 13.7341C116.046 13.7341 114.926 13.7554 114.478 13.7981V22.7901ZM129.713 19.9101C129.713 17.9688 130.684 16.5074 132.625 15.5261C134.588 14.5448 137.116 14.0434 140.209 14.0221V13.2861C140.209 12.4114 140.113 11.7288 139.921 11.2381C139.75 10.7474 139.42 10.3848 138.929 10.1501C138.46 9.8941 137.766 9.7661 136.849 9.7661C135.804 9.7661 134.865 9.90477 134.033 10.1821C133.201 10.4381 132.337 10.7794 131.441 11.2061L130.449 9.1581C130.769 8.88077 131.302 8.5501 132.049 8.1661C132.817 7.7821 133.724 7.45143 134.769 7.1741C135.814 6.87543 136.892 6.7261 138.001 6.7261C139.644 6.7261 140.924 6.93943 141.841 7.3661C142.78 7.79277 143.452 8.47543 143.857 9.4141C144.262 10.3528 144.465 11.6114 144.465 13.1901V22.9821H146.193V24.7741C145.766 24.8808 145.158 24.9874 144.369 25.0941C143.58 25.2008 142.886 25.2541 142.289 25.2541C141.564 25.2541 141.073 25.1474 140.817 24.9341C140.582 24.7208 140.465 24.2834 140.465 23.6221V22.7581C139.889 23.3981 139.142 23.9741 138.225 24.4861C137.308 24.9981 136.273 25.2541 135.121 25.2541C134.14 25.2541 133.233 25.0514 132.401 24.6461C131.59 24.2194 130.94 23.6114 130.449 22.8221C129.958 22.0114 129.713 21.0408 129.713 19.9101ZM137.169 22.5981C137.617 22.5981 138.129 22.4701 138.705 22.2141C139.281 21.9368 139.782 21.6061 140.209 21.2221V15.9741C138.289 15.9741 136.849 16.3048 135.889 16.9661C134.95 17.6061 134.481 18.4381 134.481 19.4621C134.481 20.4861 134.716 21.2648 135.185 21.7981C135.676 22.3314 136.337 22.5981 137.169 22.5981ZM151.742 22.2781C151.913 22.5341 152.297 22.7794 152.894 23.0141C153.513 23.2274 154.131 23.3341 154.75 23.3341C155.753 23.3341 156.499 23.1314 156.99 22.7261C157.502 22.2994 157.758 21.7448 157.758 21.0621C157.758 20.3581 157.449 19.7928 156.83 19.3661C156.211 18.9181 155.166 18.3741 153.694 17.7341L152.798 17.3501C151.326 16.7314 150.227 15.9848 149.502 15.1101C148.777 14.2354 148.414 13.1048 148.414 11.7181C148.414 10.7581 148.702 9.90477 149.278 9.1581C149.854 8.3901 150.665 7.79277 151.71 7.3661C152.755 6.93943 153.961 6.7261 155.326 6.7261C156.329 6.7261 157.182 6.7901 157.886 6.9181C158.611 7.0461 159.369 7.21677 160.158 7.4301C160.585 7.57943 160.905 7.66477 161.118 7.6861V11.8781H158.59L157.854 9.4461C157.726 9.23277 157.438 9.04077 156.99 8.8701C156.542 8.69943 156.03 8.6141 155.454 8.6141C154.579 8.6141 153.875 8.8061 153.342 9.1901C152.83 9.55277 152.574 10.0648 152.574 10.7261C152.574 11.3234 152.755 11.8248 153.118 12.2301C153.481 12.6141 153.875 12.9128 154.302 13.1261C154.729 13.3394 155.518 13.6914 156.67 14.1821C157.822 14.6728 158.771 15.1421 159.518 15.5901C160.286 16.0381 160.915 16.6248 161.406 17.3501C161.918 18.0541 162.174 18.9181 162.174 19.9421C162.174 21.5208 161.555 22.8008 160.318 23.7821C159.081 24.7634 157.299 25.2541 154.974 25.2541C153.886 25.2541 152.905 25.1581 152.03 24.9661C151.177 24.7741 150.185 24.5181 149.054 24.1981L148.35 23.9741V19.7501H151.006L151.742 22.2781ZM172.848 25.2541C170.032 25.2541 167.93 24.4328 166.544 22.7901C165.178 21.1261 164.496 18.8648 164.496 16.0061C164.496 14.0861 164.848 12.4221 165.552 11.0141C166.277 9.6061 167.29 8.52877 168.592 7.7821C169.893 7.03543 171.397 6.6621 173.104 6.6621C175.237 6.6621 176.88 7.22743 178.032 8.3581C179.184 9.46743 179.781 11.0568 179.824 13.1261C179.824 14.5341 179.738 15.5794 179.568 16.2621H169.168C169.253 18.2034 169.712 19.7181 170.544 20.8061C171.376 21.8728 172.56 22.4061 174.096 22.4061C174.928 22.4061 175.781 22.2674 176.656 21.9901C177.552 21.7128 178.256 21.3821 178.768 20.9981L179.568 22.7581C178.992 23.3768 178.053 23.9528 176.752 24.4861C175.472 24.9981 174.17 25.2541 172.848 25.2541ZM175.344 14.3421C175.386 13.7448 175.408 13.2861 175.408 12.9661C175.408 10.1288 174.458 8.7101 172.56 8.7101C171.514 8.7101 170.704 9.1261 170.128 9.9581C169.552 10.7901 169.232 12.2514 169.168 14.3421H175.344Z"
            fill="#02000F"
          />
        </svg>
      </div>
      <nav className="mt-[60px]">
        <ul className="sidebarul text-black">
          <li className="my-[40px]  ml-[6px] text-[17px] text-black font-bold leading-[17.9px] cursor-pointer">
            <a className="flex gap-2 items-center" href="/">
              <BsDatabaseFillUp size={20} />
              <p>Infra</p>
            </a>
          </li>

          <li className="my-[40px]  ml-[6px] text-[17px] text-[#93A3AB] leading-[17.9px] font-medium cursor-pointer">
            <a
              className="flex gap-2 items-center"
              href="https://dropzone.komet.me/dropz"
            >
              <RiNftLine size={20} />
              <p>Dropz</p>
            </a>
          </li>

          <li className="my-[40px]  ml-[6px] text-[17px] text-[#93A3AB] leading-[17.9px] font-medium cursor-pointer">
            <a
              className="flex gap-2 items-center"
              href="https://komet.me/launch_"
            >
              <FaRocket size={20} />
              <p>Launch</p>
            </a>
          </li>

          <li className="my-[40px]  ml-[6px] text-[17px] text-[#93A3AB] leading-[17.9px] font-medium cursor-pointer">
            <a
              className="flex gap-2 items-center"
              href="https://dropzone.komet.me/"
            >
              <GiFireZone size={20} />
              <p>Dropzone</p>
            </a>
          </li>

          {showInvite && (
            <li
              className="my-[40px] flex gap-2 items-center  ml-[6px] text-[17px] text-[#93A3AB] leading-[17.9px] font-medium cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <FcInvite size={20} />

              <p>Invite</p>
            </li>
          )}
          <li
            className="my-[40px] flex gap-2 items-center  ml-[6px] text-[17px] text-[#93A3AB] leading-[17.9px] font-medium cursor-pointer"
            onClick={() => {
              logoutFromKomet();
            }}
          >
            <IoLogOut size={20} />
            <p>Logout</p>
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
