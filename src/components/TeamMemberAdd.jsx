import { useState, useContext } from "react";
import axios from "axios";
import { DataContext } from "@/context/dataContext";
import User from "@/assets/inviteUser.svg";
import Cross from "@/assets/circlecross.svg";
import Success from "@/assets/success.svg";
export default function TeamMemberAdd({ isOpen, onClose }) {
  const { groupId } = useContext(DataContext);
  console.log("groupId", groupId);
  const [walletAddresses, setWalletAddresses] = useState("");
  const [success, setSuccess] = useState(false);
  const handleWalletAddressesChange = (event) => {
    setWalletAddresses(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const addresses = walletAddresses
      .split(",")
      .map((address) => address.trim());
    if (addresses[0] !== "") {
      console.log("Wallet Addresses:", addresses);
      const data = {
        groupId: groupId,
        invitee: addresses,
      };
      const response = await axios.post(
        "https://prod-api.komet.me/invite/public/add-invitee",
        data
      );
      console.log(response);
      setSuccess(true);
    }
    setWalletAddresses("");
  };

  const resetForm = () => {
    setSuccess(false);
    onClose(); // Call onClose to close the modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[2000]">
      {!success ? (
        <div className="bg-white px-[24px] pt-[20px] pb-[32px] rounded-[12px] border w-[367px] border-[#C9C5EB80]">
          <div className="flex items-center justify-between mb-[8px]">
            <h2
              className="font-semibold text-[18px] leading-[21.48px] text-[#100F1F]"
              style={{ letterSpacing: "-4%" }}
            >
              Invite Team Member
            </h2>
            <img
              src={Cross.src}
              alt=""
              onClick={resetForm}
              className="cursor-pointer h-[16px] w-[16px]"
            />
          </div>
          <div
            style={{ borderTop: "1px solid #C9C5EB4D" }}
            className="mb-[20px]"
          ></div>
          <form onSubmit={handleSubmit}>
            <div className="mb-[12px] flex border-[2px] rounded-[4px] py-[10px] px-[12px] items-center w-full">
              <img src={User.src} alt="" />
              <input
                className="appearance-none w-full outline-none px-[8px] text-[12px] text-[#100F1F] leading-[14.32px] text-opacity-60"
                id="addressess"
                name="addressess"
                type="text"
                value={walletAddresses}
                onChange={handleWalletAddressesChange}
                placeholder="Enter Wallet address"
              />
            </div>

            <button
              className="w-full gradientBackground hover:bg-orange-700 text-[#FFFFFF] py-[11.5PX] rounded-[4px] focus:outline-none focus:shadow-outline font-semibold"
              type="submit"
            >
              Request Access
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white relative px-[32px] py-[24px] rounded-[12px] border w-[367px] h-[191px]">
          <img
            src={Cross.src}
            alt=""
            onClick={resetForm}
            className="cursor-pointer absolute right-4 top-4"
          />
          <img src={Success.src} alt="" className="mt-[-90px]"/>
        </div>
      )}
    </div>
  );
}
