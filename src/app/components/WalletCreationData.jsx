"use client";
import React, { useState, useEffect, useContext } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { DataContext } from "@/context/data";

const WalletCreationData = () => {
  const { users } = useContext(DataContext);
  const [aggregatedData, setAggregatedData] = useState({
    months: [],
    counts: [],
    cumulativeCounts: [],
  });

  useEffect(() => {
    const countMap = {};
    if (users) {
      users.forEach((item) => {
        const date = new Date(item.createdAt);
        const monthYearKey = `${date.toLocaleString("default", {
          month: "short",
        })}-${date.getFullYear()}`;

        if (!countMap[monthYearKey]) {
          countMap[monthYearKey] = 0;
        }
        countMap[monthYearKey] += 1;
      });

      const months = Object.keys(countMap);
      const counts = Object.values(countMap);
      const cumulativeCounts = counts.map(
        (
          (sum) => (value) =>
            (sum += value)
        )(0)
      );
      setAggregatedData({ months, counts, cumulativeCounts });
    }
  }, [users]);

  const data = {
    labels: aggregatedData.months,
    datasets: [
      {
        label: "Month Data",
        data: aggregatedData.counts,
        fill: true,
        backgroundColor: "rgba(255,255,255, 0.3)", // Light blue fill
        borderColor: "rgb(54, 162, 235)", // Blue line
        tension: 0.3,
      },
      {
        label: "Aggregated Data",
        data: aggregatedData.cumulativeCounts,
        fill: true,
        backgroundColor: "rgba(255, 255, 255, 0.3)", // Light red fill
        borderColor: "rgb(255, 99, 132)", // Red line
        tension: 0.3,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Months-year",
          color: "#000000",
          font: {
            size: 16,
          },
          padding: { top: 20, left: 0, right: 0, bottom: 0 },
        },
        grid: {
          color: "rgba(0, 0, 0, 0)", // Decrease opacity of X-axis grid lines
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Wallet Creation",
          color: "#000000",
          font: {
            size: 16,
          },
          padding: { top: 30, left: 0, right: 0, bottom: 0 },
        },
        grid: {
          color: "rgba(0, 0, 0, 0)",
        },
        ticks: {
          // Convert Y-axis values to 'K' format and restrict to specific values
          callback: (value) => value,
          beginAtZero: true,
          stepSize: 1000, // Step size of 100K
          max: 12000, // Maximum value of 400K
        },
      },
    },
  };

  return (
    <div className="bg-slate-50 ml-[20px] my-[30px] p-[20px] rounded-md pb-[40px] w-full">
      <p className="font-semibold">User activity over time</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default WalletCreationData;
