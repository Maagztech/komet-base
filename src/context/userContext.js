"use client";
import { createContext, useEffect, useState } from 'react';
import { setCookie } from "cookies-next";
import { fetchUser, parseJwt, checkEmailAccountExists, login, fetchSeed, decryptData, encryptData, getOneAccountDetails } from "@/data/userData"
import { useRouter } from "next/navigation";
export const UserContext = createContext();
const BASE_URL = "https://prod-api.komet.me/"
const APIKEY = "hl23n6dgigp2pgvtzt7sm0nw4caiau11";
const KEY = "W4DRnUcof83pbRzEFp8U24vbTr7vzSil";
export const UserContextProvider = ({ children }) => {
    const router = useRouter();
    const [userData, setUserData] = useState();
    const getEmail = async (res) => {
        try {
            const info = parseJwt(res.credential);
            const response = await checkEmailAccountExists(info.email);
            if (response.data.isCollector == true || response.data.isGamer) {
                localStorage.setItem("email", info.email);
                loginHandleSubmit(info.email);
            } else {
                localStorage.setItem("email", email);
            }
        } catch (error) {
            console.log("Error", error);
        }
    };




    const loginHandleSubmit = async (email) => {
        try {
            const token = localStorage.getItem("token") || "";
            if (email != null) {
                const resp = await login(email, token);
                const bearerToken = resp.data?.success?.data?.oneFaToken;
                localStorage.setItem("auth", bearerToken);
                const userData = await fetchUser(bearerToken);
                const primaryAddress = userData?.success?.data?.userWallets?.filter(
                    (item) => {
                        return item?.type === "KOMET_WALLET";
                    }
                )[0];
                const userId = userData?.success?.data?.userId;
                localStorage.setItem("userid", userId);
                const address = primaryAddress?.walletAddress;
                const userEmail = userData?.success?.data?.email;
                const username = userData?.success?.data?.username;
                const res = await fetchSeed(token, bearerToken, address);
                if (res.data?.seedPhrase) {
                    localStorage.setItem("auth", bearerToken || null);
                    setCookie("auth", bearerToken, { maxAge: 60 * 60 * 24 * 14 });
                    const seedPhrase = await decryptData(res.data.seedPhrase, APIKEY);
                    const WalletInfo = getOneAccountDetails(seedPhrase);
                    if (WalletInfo) {
                        const share = await encryptData(
                            WalletInfo.privateKey,
                            KEY
                        );
                        localStorage.setItem("share", share);
                        const userInfo = {
                            username: username,
                            address: WalletInfo.address,
                            userId: userId,
                            email: userEmail,
                            auth: bearerToken,
                            share: share,
                            wallets: userData?.success?.data?.userWallets,
                        };
                        localStorage.setItem("address", WalletInfo?.address);
                        setUserData(userInfo);
                        router.push("/analytics");
                    }
                }
            }
        } catch (err) {
            console.log("An error occured.", err)
        }
    };


    return (
        <UserContext.Provider value={{ getEmail, userData }} >
            {children}
        </UserContext.Provider >
    );
}