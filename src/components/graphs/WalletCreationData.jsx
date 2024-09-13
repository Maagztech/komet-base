"use client";
import { DataContext } from "@/context/dataContext";
import "chart.js/auto";
import { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

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

  const backgroundGradient = gradient.createLinearGradient(0, 0, 450, 0);
  backgroundGradient.addColorStop(0, "rgba(94, 195, 255, 0.04)");
  backgroundGradient.addColorStop(1, "rgba(253, 93, 239, 0.04)");

  const data = {
    labels: aggregatedData.months,
    datasets: [
      {
        data: [100, 200, 300, 90, 100, 120, 170, 60, 100, 200, 300],
        // aggregatedData.counts,
        borderColor: gradientFill,
        borderWidth: 4,
        tension: 0.3,
        fill: true,
        backgroundColor: backgroundGradient,
        pointRadius: 8,
        pointBorderWidth: 2,
        pointHoverRadius: 10,
        pointBackgroundColor: "#FFFFFF",
        pointBorderColor: gradientFill,
        pointHoverBackgroundColor: "#FFFFFF",
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        intersect: false,
        mode: "index",
      },
    },
    scales: {
      x: {
        display: true,
        border: {
          display: false,
        },
        grid: {
          drawBorder: false, // Hide x-axis line
          drawOnChartArea: false,
          color: "rgba(3, 2, 41, 0.03)", // Adjusted to 5% opacity for grid lines
          drawTicks: false,
        },
        ticks: {
          display: true,
          font: {
            size: 12,
          }, // Text with reduced opacity
          padding: 20,
        },
      },
      y: {
        display: true,
        border: {
          display: false,
        },
        grid: {
          drawBorder: false, // Hide y-axis line
          drawOnChartArea: true,
          color: "rgba(3, 2, 41, 0.03)", // Adjusted to 5% opacity for grid lines
          drawTicks: false,
        },
        ticks: {
          display: true,
          beginAtZero: true,
          stepSize: 5000,
          max: 12000,
          padding: 25,
        },
      },
    },
  };

  return (
    <div className="bg-white ml-[30px] p-[28px] rounded-[10px] pb-[40px] w-full h-[408px] mb-[40px]">
      <p className="font-semibold">Wallet Created</p>
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default WalletCreationData;
