"use client";
import axios from 'axios';
import { createContext, useState } from 'react';

export const DataContext = createContext();
export const DataContextProvider = ({ children }) => {

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




    return (
        <DataContext.Provider value={{
            startDate, setStartDate,
            endDate, setEndDate,
            users, setUsers,
            totalUsers, setTotalUsers,
            givenDateUsers, setGivenDateUsers,
            FindDateSpecificUsersCount
        }}>
            {children}
        </DataContext.Provider>
    );
}