"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const StackedBarChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65000, 59000, 80000, 81000, 56000, 55000, 40000],
        backgroundColor: "rgba(255, 0, 0, 0.7)",
        barThickness: 6, // Makes bars thinner
      },
      {
        label: "Dataset 2",
        data: [28000, 48000, 40000, 19000, 86000, 27000, 90000],
        backgroundColor: "rgba(0, 0, 255, 0.7)",
        barThickness: 6, // Makes bars thinner
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: "Volume in USD",
          color: "#000000",
          font: {
            size: 16,
          },
        },
        ticks: {
          // Convert Y-axis values to 'K' format and restrict to specific values
          callback: (value) => `${value / 1000}K`,
          beginAtZero: true,
          stepSize: 20000, // Step size of 100K
          max: 100000, // Maximum value of 400K
        }
      },
    },
  };

  return (
    <div className="bg-slate-50 ml-[20px] mb-[30px] p-[20px] rounded-md pb-[40px] w-2/3">
      <p className="font-semibold">Cummulative Sales Stats</p>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBarChart;
