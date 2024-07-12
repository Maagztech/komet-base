"use client";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const TransactionVolume = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Month");
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });

  // Function to fetch data for the selected period
  const fetchData = (period) => {
    let labels = [];
    let dataPoints = [];

    // Adjust data retrieval logic based on selected period
    switch (period) {
      case "Day":
        labels = Array.from({ length: 12 }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() - (i + 1));
          return date.toLocaleDateString();
        }).reverse();
        dataPoints = Array.from({ length: 12 }, () =>
          Math.floor(Math.random() * 100)
        );
        break;
      case "Week":
        labels = Array.from({ length: 12 }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() - (i + 1) * 7);
          const endDate = new Date(date);
          endDate.setDate(endDate.getDate() + 6);
          return `${endDate.toLocaleDateString()}`;
        }).reverse();
        dataPoints = Array.from({ length: 12 }, () =>
          Math.floor(Math.random() * 100)
        );
        break;
      case "Month":
        labels = Array.from({ length: 12 }, (_, i) => {
          const date = new Date();
          date.setMonth(date.getMonth() - (i + 1));
          const formattedDate = date.toLocaleDateString("default", {
            month: "short",
          });
          const yearLastTwoDigits = date.getFullYear().toString().slice(-2);
          return `${formattedDate} ${yearLastTwoDigits}`;
        }).reverse();
        dataPoints = Array.from({ length: 12 }, () =>
          Math.floor(Math.random() * 100)
        );
        break;
      case "Year":
        labels = Array.from({ length: 12 }, (_, i) => {
          const date = new Date();
          date.setFullYear(date.getFullYear() - (i + 1));
          return date.getFullYear().toString();
        }).reverse();
        dataPoints = Array.from({ length: 12 }, () =>
          Math.floor(Math.random() * 100)
        );
        break;
      default:
        break;
    }

    const gradient = document.createElement("canvas").getContext("2d");
    const gradientFill = gradient.createLinearGradient(0, 0, 0, 450);
    gradientFill.addColorStop(0, "#F9654F");
    gradientFill.addColorStop(1, "#FF26E9");

    const backgroundGradient = gradient.createLinearGradient(0, 0, 450, 0);
    backgroundGradient.addColorStop(0, "rgba(94, 195, 255, 0.04)");
    backgroundGradient.addColorStop(1, "rgba(253, 93, 239, 0.04)");

    const newData = {
      labels,
      datasets: [
        {
          // label: period,
          data: dataPoints,
          borderWidth: 4,
          tension: 0.3,
          fill: true,
          borderColor: gradientFill,
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
    setData(newData);
  };

  // Fetch data for the initial period
  useEffect(() => {
    fetchData(selectedPeriod);
  }, [selectedPeriod]);

  // Handle period change
  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          drawBorder: false, // Hide y-axis line
          drawOnChartArea: true,
          color: "rgba(3, 2, 41, 0.03)", // Adjusted to 5% opacity for grid lines
          drawTicks: false,
        },
        border: {
          display: false,
        },
        beginAtZero: true,
        title: {
          display: false,
          text: "Volume USD",
          color: "#000000",
          font: {
            size: 14, // Adjust font size
            weight: "bold", // Make the font bold
          },
        },
        ticks: {
          callback: (value) => `$ ${value}k`,
          beginAtZero: true,
          max: 100,
          stepSize: 20,
          padding: 25,
        },
      },
      x: {
        border: {
          display: false,
        },
        grid: {
          color: "rgba(0, 0, 0, 0)", // Decrease opacity of X-axis grid lines
        },
        ticks: {
          padding: 20,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
  };
  return (
    <div className="bg-white ml-[30px] mb-[40px] p-[28px] pb-[70px] rounded-[10px] h-[408px]">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold mb-[8px]">Transaction Volume</p>
          <p className="text-[13px] text-[#93A3AB] mb-[10px] leading-[16px] font-medium">
            <span className="text-[#65C565] font-semibold">+3,4% </span>Past{" "}
            {selectedPeriod}
          </p>
        </div>

        <div className="flex gap-4 mr-[60px]">
          <button
            className={`${selectedPeriod === "Day" ? "gradientText" : ""}`}
            onClick={() => handlePeriodChange("Day")}
          >
            D
          </button>
          <button
            className={`${selectedPeriod === "Week" ? "gradientText" : ""}`}
            onClick={() => handlePeriodChange("Week")}
          >
            W
          </button>
          <button
            className={`${selectedPeriod === "Month" ? "gradientText" : ""}`}
            onClick={() => handlePeriodChange("Month")}
          >
            M
          </button>
          <button
            className={`${selectedPeriod === "Year" ? "gradientText" : ""}`}
            onClick={() => handlePeriodChange("Year")}
          >
            Y
          </button>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default TransactionVolume;
