"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const ContinuousGraph = () => {
  const data = {
    labels: [
      "Jun 2023",
      "Jul 2023",
      "Aug 2023",
      "Sep 2023",
      "Oct 2023",
      "Nov 2023",
      "Dec 2023",
    ],
    datasets: [
      {
        label: "Profit",
        data: [100000, 200000, 150000, 250000, 200000, 350000, 100000],
        fill: true,
        backgroundColor: "rgba(255,255,255, 0.3)", // Light blue fill
        borderColor: "rgb(54, 162, 235)", // Blue line
        tension: 0.4,
      },
      {
        label: "Sales",
        data: [80000, 340000, 120000, 215000, 280000, 320000, 300000],
        fill: true,
        backgroundColor: "rgba(255, 255, 255, 0.3)", // Light red fill
        borderColor: "rgb(255, 99, 132)", // Red line
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Week Starting",
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
          text: "Cumulative Sales",
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
          callback: (value) => `${value / 1000}K`,
          beginAtZero: true,
          stepSize: 100000, // Step size of 100K
          max: 400000, // Maximum value of 400K
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

export default ContinuousGraph;
