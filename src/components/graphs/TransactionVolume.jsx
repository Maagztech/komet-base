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
          return `${date.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
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
    const gradientFill1 = gradient.createLinearGradient(0, 0, 0, 450);
    gradientFill1.addColorStop(0, "#F9654F");
    gradientFill1.addColorStop(1, "#FF26E9");

    const newData = {
      labels,
      datasets: [
        {
          label: period,
          data: dataPoints,
          fill: true,
          backgroundColor: gradientFill1, // Gradient fill color
          borderColor: "transparent", // Transparent border
          tension: 0,
          pointBackgroundColor: "transparent", // Transparent data point fill
          pointBorderColor: "#FF26E9", // Border color for data points
          pointHoverBackgroundColor: "#FFFFFF", // Hover color for data points
          pointHoverRadius: 8, // Increase pointer size on hover
          pointHoverBorderWidth: 3, // Hover border width
          pointRadius: 6, // Default point size
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
    scales: {
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0)", // Decrease opacity of Y-axis grid lines
        },
        beginAtZero: true,
        title: {
          display: true,
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
        },
      },
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0)", // Decrease opacity of X-axis grid lines
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
    <div
      className="bg-white ml-[30px] mb-[40px] p-[28px] rounded-md"
      style={{ width: "calc(2/3 * 100vw - 8px)" }}
    >
      <div className="flex justify-between items-center">
        <p className="font-semibold mb-4">Transaction Volume</p>
        <div className="flex mb-2 gap-4">
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
      <div style={{ maxHeight: "450px", overflow: "auto" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TransactionVolume;
