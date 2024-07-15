"use client";
import axios from 'axios';
import { createContext, useEffect, useState, useContext } from 'react';
import { UserContext } from "./userContext";
export const DataContext = createContext();
const BASE_URL = "https://prod-api.komet.me/";


export const DataContextProvider = ({ children }) => {
    let { userData } = useContext(UserContext);

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    const [startDate, setStartDate] = useState(formatDate(new Date()));
    const [endDate, setEndDate] = useState(formatDate(new Date()));
    const [users, setUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [givenDateUsers, setGivenDateUsers] = useState(0);
    const [showData, setShowData] = useState(false);
    const [showInvite, setShowInvite] = useState(false);
    const [walletaddress, setWalletAddress] = useState(userData?.address || "");
    const [groupName, setGroupName] = useState("");
    const [groupId, setGroupId] = useState(null);
    const [h24User, setH24Users] = useState(0);
    const FindDateSpecificUsersCount = async () => {
        try {
            let count = 0;
            users.forEach(user => {
                const date = new Date(user.createdAt);
                const formattedDate = date.toISOString().split('T')[0];
                if (formattedDate >= startDate && formattedDate <= endDate) {
                    count++;
                }
            });
            setGivenDateUsers(count);
        } catch (error) {
            console.error('Sign up failed:', error);
        }
    }

    useEffect(() => {
        setWalletAddress(userData?.address);
        console.log("userData", userData)
    }, [userData])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("https://sdk.komet.me/komet-base/location/24-hour-user-count?partnerId=" + groupId);
            setH24Users(res?.data?.user_count || 0);
        }
        if (groupId) {
            fetchData();
        }
    }, [groupId])

    useEffect(() => {
        const fetchData = async () => {
            if (!walletaddress) return;
            setShowData(false);
            setShowInvite(false);
            setGroupName("");
            setGroupId(undefined);
            const checkAdmin = await axios.get(`${BASE_URL}invite/public/check-admin/${walletaddress}`);
            const checkInvitee = await axios.get(`${BASE_URL}invite/public/check-invite/${walletaddress}`);
            if (checkAdmin?.data?.admin) {
                setShowData(true);
                setShowInvite(true);
                setGroupName(checkAdmin.data.groupName);
                setGroupId(checkAdmin.data.id);
            }
            else if (checkInvitee.data.admin) {
                setShowData(true);
                setGroupName(checkAdmin.data.groupName);
            }
        };
        fetchData().catch(console.error);
    }, [walletaddress])



    return (
        <DataContext.Provider value={{
            startDate, setStartDate,
            endDate, setEndDate,
            users, setUsers,
            totalUsers, setTotalUsers,
            givenDateUsers, setGivenDateUsers,
            walletaddress, setWalletAddress,
            showData, showInvite,
            groupName, setGroupName,
            groupId, setGroupId,
            FindDateSpecificUsersCount,
            h24User
        }}>
            {children}
        </DataContext.Provider>
    );
}