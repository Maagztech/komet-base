"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const CountryPercentageChart = () => {
  const data = {
    labels: ["India", "United Kingdom", "Canada", "Australia", "Spain"],
    datasets: [
      {
        label: "Percentage",
        data: [70, 55, 80, 60, 50], // Example percentages for each country
        backgroundColor: ["red", "blue", "green", "orange", "purple"], // Fill color for each country's percentage
        barPercentage: 1.0,
        categoryPercentage: 1.0,
        barThickness: 3,
      },
      {
        label: "Remaining",
        data: [30, 45, 20, 40, 50], // Calculate the remaining percentage to reach 100%
        backgroundColor: "black", // Black color for the unfilled portion
        barPercentage: 1.0,
        categoryPercentage: 1.0,
        barThickness: 3,
      },
    ],
  };

  const options = {
    indexAxis: "y", // Use a horizontal bar chart
    scales: {
      x: {
        stacked: true, // Stack the percentage and remaining datasets
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        display: false, // Optionally hide the legend
      },
    },
  };

  return (
    <div className="bg-slate-50 ml-[20px] mb-[30px] p-[20px] rounded-md pb-[40px] w-1/3">
      <p className="font-semibold">Users By Country</p>
      <p className="text-sm text-gray-400 mb-[10px]">12.4K</p>
      <Bar data={data} options={options} height={300}/>
    </div>
  );
};

export default CountryPercentageChart;
