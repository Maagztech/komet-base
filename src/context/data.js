"use client";
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useAccount } from "wagmi";
export const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
    const { address } = useAccount();
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
    const [walletaddress, setWalletAddress] = useState(address);
    const [groupName, setGroupName] = useState("");
    const [groupId, setGroupId] = useState();
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
        setWalletAddress(address);
    }, [address])
    useEffect(() => {
        const fetchData = async () => {
            if (!walletaddress) return;
            setShowData(false);
            setShowInvite(false);
            setGroupName("");
            setGroupId(undefined);
            const checkAdmin = await axios.get(`https://prod-api.komet.me/invite/public/check-admin/${walletaddress}`);
            const checkInvitee = await axios.get(`https://prod-api.komet.me/invite/public/check-invite/${walletaddress}`);
            if (checkAdmin.data.admin) {
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
            FindDateSpecificUsersCount
        }}>
            {children}
        </DataContext.Provider>
    );
}