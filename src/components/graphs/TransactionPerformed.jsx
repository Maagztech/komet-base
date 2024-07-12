"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const TransactionPerformed = () => {
  // Define the x-axis labels for months of 2023 and 2024 (10 data points)
  const labels = [
    "Jun 23",
    "Jul 23",
    "Aug 23",
    "Sep 23",
    "Oct 23",
    "Nov 23",
    "Dec 23",
    "Jan 24",
    "Feb 24",
    "Mar 24",
  ];

  const gradient = document.createElement("canvas").getContext("2d");
  const gradientFill = gradient.createLinearGradient(0, 0, 0, 450);
  gradientFill.addColorStop(0, "#F9654F");
  gradientFill.addColorStop(1, "#FF26E9");

  // Define the datasets with more distinguishable colors
  const datasets = [
    {
      label: "Buy",
      data: [70, 80, 20, 30, 40, 50, 60, 70, 80, 90],
      backgroundColor: gradientFill,
      barThickness: 16,
    },
    {
      label: "Send",
      data: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
      backgroundColor: "#FF8417",
      barThickness: 16,
    },
    {
      label: "Swap",
      data: [80, 90, 100, 110, 120, 130, 140, 150, 160, 170],
      backgroundColor: "#D9E1FA",
      barThickness: 16,
    },
    {
      label: "Bridge",
      data: [110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
      backgroundColor: "#FFD53D",
      barThickness: 16,
    },
  ];

  // Define the data object
  const data = {
    labels,
    datasets,
  };

  // Define the options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20, // Adjust top padding as needed
        bottom: 20, // Adjust bottom padding as needed
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          color: "rgba(0, 0, 0, 0)", // Hide x-axis grid lines
          drawBorder: false, // Hide x-axis border line
        },
        border: {
          display: false,
        },
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          max: labels.length - 1,
          padding: 20, // Ensure ticks do not overflow
        },
      },
      y: {
        stacked: true,
        ticks: {
          callback: (value) => `${value}K`,
          beginAtZero: true,
          padding: 25,
        },
        border: {
          display: false,
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)", // Decrease opacity of y-axis grid lines
          drawBorder: false, // Hide y-axis border line
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        align: "end", // Align legend vertically at the top right
        labels: {
          usePointStyle: true, // Use point style for legend items
          pointStyle: "circle",
          padding: 10, // Add padding between legend items
          boxWidth: 8,
          boxHeight: 6, // Make legend circles smaller
          color: "#202020",
          font: {
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <div className="bg-white ml-[30px] mb-[40px] p-[28px] rounded-md w-full h-[408px]">
      <p className="font-semibold">Total Transaction Performed</p>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TransactionPerformed;
