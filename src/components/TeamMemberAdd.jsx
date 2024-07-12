import { useState, useContext } from "react";
import axios from "axios";
import { DataContext } from "@/context/dataContext";
import User from "@/assets/dropz.svg";
import Cross from "@/assets/circlecross.svg";
import Success from "@/assets/success.svg";
export default function TeamMemberAdd({ isOpen, onClose }) {
  const { groupId } = useContext(DataContext);
  console.log("groupId", groupId);
  const [walletAddresses, setWalletAddresses] = useState("");
  const [success, setSuccess] = useState(true);
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
        <div className="bg-white px-[32px] py-[24px] rounded-lg border w-[544px]">
          <div className="flex items-center justify-between mb-[32px]">
            <h2 className="font-semibold text-[24px] leading-[32px]">
              Invite Team member
            </h2>
            <img
              src={Cross.src}
              alt=""
              onClick={resetForm}
              className="cursor-pointer"
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-[32px] flex border-[2px] rounded-[12px] p-[16px] items-center w-full">
              <img src={User.src} alt="" />
              <input
                className="appearance-none w-full outline-none px-3 text-[16px] text-[#87898E] leading-[24px] font-medium"
                id="addressess"
                name="addressess"
                type="text"
                value={walletAddresses}
                onChange={handleWalletAddressesChange}
                placeholder="Wallet addresses separated by commas"
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <button
                className="flex-1 text-[#23262F] py-[20px] rounded-full focus:outline-none focus:shadow-outline"
                type="button"
                onClick={resetForm}
              >
                Cancel
              </button>
              <button
                className="gradientBackground flex-1 hover:bg-orange-700 text-[#FCFCFD] py-[20px] rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white relative px-[32px] py-[24px] rounded-lg border w-[544px]">
          <img
            src={Cross.src}
            alt=""
            onClick={resetForm}
            className="cursor-pointer absolute right-4 top-4"
          />
          <img src={Success.src} alt="" />
        </div>
      )}
    </div>
  );
}
