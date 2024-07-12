"use client";

import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { DataContext } from "@/context/dataContext";
import Export from "./Export";
import { UserContext } from "@/context/userContext";

const ConnectWallet = () => {
  const { showData } = useContext(DataContext);
  const { userData, logoutFromKomet } = useContext(UserContext);
  const router = useRouter();
  const [show, setShow] = useState(false);

  return (
    <div>
      {showData && (
        <div className="flex justify-between">
          <p
            className="mt-[80px] mb-[24px] ml-[30px] text-[20px] leading-[24px] font-medium"
            style={{ letterSpacing: "-3%" }}
          >
            Dashboard
          </p>
          <Export />
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
