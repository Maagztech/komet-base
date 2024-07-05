"use client";
import React, { useState, useEffect, useContext } from "react";
import { Line } from "react-chartjs-2";
import { DataContext } from "@/context/dataContext";
import "chart.js/auto";

const WalletCreationData = () => {
  const { users } = useContext(DataContext);
  const [aggregatedData, setAggregatedData] = useState({
    months: [],
    counts: [],
    cumulativeCounts: [],
  });

  useEffect(() => {
    if (users) {
      const countMap = {};
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

  const gradient = document.createElement("canvas").getContext("2d");
  const gradientFill = gradient.createLinearGradient(0, 0, 0, 450);
  gradientFill.addColorStop(0, "#F9654F");
  gradientFill.addColorStop(1, "#FF26E9");

  const data = {
    labels: aggregatedData.months,
    datasets: [
      {
        data: aggregatedData.counts,
        borderColor: gradientFill,
        borderWidth: 5, // Adjusted border width
        tension: 0.3,
        fill: false,
        pointRadius: 6,
        pointerBorderWidth: 1,
        pointHoverRadius: 8, // Increased pointer size on hover
        pointBackgroundColor: "#FFFFFF", // Transparent data point fill
        pointBorderColor: "#FF26E9", // Border color for data points
        pointHoverBackgroundColor: "#FFFFFF", // Hover color for data points
        pointHoverBorderWidth: 3, // Hover border width
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months-year",
          color: "#000000",
          font: {
            size: 14, // Adjust font size
            weight: "bold", // Make the font bold
          },
          padding: { top: 20, left: 0, right: 0, bottom: 0 },
        },
        grid: {
          color: "rgba(0, 0, 0, 0)",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Wallet Creation",
          color: "#000000",
          font: {
            size: 14, // Adjust font size
            weight: "bold", // Make the font bold
          },
          padding: { top: 30, left: 0, right: 0, bottom: 0 },
        },
        grid: {
          color: "rgba(0, 0, 0, 0)",
        },
        ticks: {
          callback: (value) => value,
          beginAtZero: true,
          stepSize: 1000,
          max: 12000,
        },
      },
    },
  };

  return (
    <div className="bg-white ml-[30px] my-[40px] p-[28px] rounded-md pb-[40px] w-full mx-h-[450px]">
      <p className="font-semibold mb-[36px]">Wallet Created</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default WalletCreationData;
