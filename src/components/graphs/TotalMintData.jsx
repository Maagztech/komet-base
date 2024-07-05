"use client";
import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const TotalMintData = () => {
  const chartRef = useRef(null);

  // Generate labels for the previous 12 months
  const labels = Array.from({ length: 12 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear().toString().slice(-2);
    return `${month}-${year}`;
  }).reverse();

  const data = {
    labels,
    datasets: [
      {
        label: "Mints",
        data: [12, 19, 3, 5, 2, 3, 9, 7, 4, 6, 10, 8], // Example values for each month
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(
            chartArea.left,
            0,
            chartArea.right,
            0
          );
          gradient.addColorStop(0, "#F9654F");
          gradient.addColorStop(1, "#FF26E9");

          return gradient;
        },
        borderColor: "rgba(0, 0, 0, 0)", // No border color
        borderWidth: 1,
        barThickness: 10,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0)", // Decrease opacity of Y-axis grid lines
        },
        ticks: {
          callback: function (value) {
            return value + 'k'; // Append 'k' to the y-axis values
          },
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
        display: false,
      },
    },
  };

  return (
    <div className="bg-white ml-[30px] mb-[30px] p-[28px] rounded-md pb-[60px] w-2/3 flex flex-col justify-between max-h-[450px]">
      <p className="font-semibold mb-[30px]">Number Of Mints</p>
      <Bar data={data} options={options} ref={chartRef} />
    </div>
  );
};

export default TotalMintData;
