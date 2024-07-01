import cryptojs from "crypto-js";
import { ethers } from "ethers";
import axios from "axios";
const BASE_URL = "https://prod-api.komet.me/";

export const fetchUser = async (token) => {
    if (token == null) {
        try {
            const result = await axios.get(
                `${BASE_URL}v1/api/auth/user/v1/details`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return result.data;
        } catch (err) {
            deleteCookie("auth");
        }
    }
    try {
        const result = await axios.get(
            `${BASE_URL}v1/api/auth/user/v1/details`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return result.data;
    } catch (err) {
        deleteCookie("auth");
        localStorage.clear();
        window.location.reload();
    }
};

export function parseJwt(token) {
    return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
}

export const checkEmailAccountExists = async (email) => {
    const result = await axios.get(`${BASE_URL}auth/checkEmail?email=${email}`, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
    });
    return result;
};

export const fetchSeed = async (
    token,
    accessToken,
    address
) => {
    const result = await axios.post(
        `${BASE_URL}userSeed/fetch?walletAddress=${address}`,
        {
            token,
        },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    return result;
};


export const login = async (emailId, accessToken) => {

    const body = {
        emailId: emailId,
        loginProvider: "GMAIL",
        loginContext: {
            googleIdToken: accessToken
        }
    }

    const result = await axios.post(
        `${BASE_URL}v1/api/auth/login/v1/user`,
        body,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return result;
};

export const decryptData = async (encrypted, key) => {
    const decrypted = await cryptojs.AES.decrypt(encrypted, key)
    const text = decrypted.toString(cryptojs.enc.Utf8);
    return text;
};

export const getOneAccountDetails = (mnemonic) => {
    if (typeof window !== "undefined") {
        const hdNode = ethers.utils.HDNode.fromMnemonic(mnemonic);
        const firstAccount = hdNode.derivePath("m/44'/60'/0'/0/0");
        return firstAccount;
    }
};

export const encryptData = async (message, key) => {
    const encrypted = await cryptojs.AES.encrypt(message, key);
    return encrypted.toString();
};