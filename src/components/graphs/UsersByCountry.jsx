"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import ExportArrow from "@/assets/downarrow.svg";
import Arrow from "@/assets/rightUpArrowGreen.svg";

const CountryPercentageChart = () => {
  const percentages = [70, 55, 80, 60, 50]; // Example percentages for each country
  const remainingPercentages = percentages.map(value => 100 - value); // Calculate the remaining percentages

  const data = {
    labels: ["India", "United Kingdom", "Canada", "Australia", "Spain"],
    datasets: [
      {
        label: "Percentage",
        data: percentages,
        backgroundColor: (context) => {
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
        barPercentage: 1.0,
        categoryPercentage: 1.0,
        barThickness: 4,
      },
      {
        label: "Remaining",
        data: remainingPercentages,
        backgroundColor: "black",
        barPercentage: 1.0,
        categoryPercentage: 1.0,
        barThickness: 4,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        stacked: true,
        grid: {
          color: "rgba(0, 0, 0, 0)",
        },
        ticks: {
          callback: (value) => `${value}%`,
          beginAtZero: true,
          max: 100,
        },
      },
      y: {
        stacked: true,
        grid: {
          color: "rgba(0, 0, 0, 0)",
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
    <div className="bg-white ml-[30px] mb-[30px] p-[20px] rounded-md w-1/3">
      <p className="font-semibold">Users By Country</p>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <p className="text-black my-[10px] text-2xl">12.4K</p>
          <div>
            <div className="flex gap-1 text-xs items-center p-1 justify-center rounded bg-green-100 text-green-800">
              28.5%
              <img src={Arrow.src} alt="" />
            </div>
          </div>
        </div>
        {/* <div>
          <div className="flex gap-1 items-center py-2 px-2 rounded bg-black text-white">
            Export
            <img src={ExportArrow.src} alt="" />
          </div>
        </div> */}
      </div>
      <Bar data={data} options={options} height={300} />
    </div>
  );
};

export default CountryPercentageChart;
