import { useState, useContext } from "react";
import axios from "axios";
import { DataContext } from "@/context/dataContext";
export default function TeamMemberAdd({ isOpen, onClose }) {
  const { groupId } = useContext(DataContext);
  console.log("groupId", groupId);
  const [walletAddresses, setWalletAddresses] = useState("");

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
    }
    setWalletAddresses("");
  };

  const resetForm = () => {
    onClose(); // Call onClose to close the modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg border w-[450px]">
        <h2 className="font-bold text-[25px] mb-4">Invite Wallet</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-[20px] flex border rounded-[12px] p-1 shadow items-center w-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                stroke="#87898E"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                stroke="#87898E"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <input
              className="appearance-none w-full outline-none py-2 px-3 text-gray-700 leading-tight"
              id="addressess"
              name="addressess"
              type="text"
              value={walletAddresses}
              onChange={handleWalletAddressesChange}
              placeholder="Wallet addresses separated by commas"
            />
          </div>
          <div className="flex items-center justify-between gap-1">
            <button
              className="bg-gray-500 flex-1 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
              onClick={resetForm}
            >
              Cancel
            </button>
            <button
              className="bg-orange-500 flex-1 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
