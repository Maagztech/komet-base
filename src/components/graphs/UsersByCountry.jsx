import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import ExportArrow from "@/assets/downarrow.svg";
import Arrow from "@/assets/rightUpArrowGreen.svg";

const CountryPercentageChart = () => {
  const percentages = [70, 55, 80, 60, 50];
  const remainingPercentages = percentages.map((value) => 100 - value);

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

          if (context.dataIndex === 0) {
            const gradient = ctx.createLinearGradient(
              chartArea.left,
              0,
              chartArea.right,
              0
            );
            gradient.addColorStop(0, "#F9654F");
            gradient.addColorStop(1, "#FF26E9");

            return gradient;
          } else {
            return ["#FF8473", "#FFDD64", "#00C2FF", "#D9E1FA"][
              context.dataIndex - 1
            ];
          }
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
        border: {
          display: false,
        },
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
        border: {
          display: false,
        },
        stacked: true,
        grid: {
          color: "rgba(0, 0, 0, 0)",
        },
        ticks: {
          crossAlign: "far",
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
    <div className="bg-[white] ml-[30px] mb-[40px] p-[28px] rounded-l-[10px] w-1/3 border-r-[0.6px] border-[#0B1739]">
      <p className="font-normal text-[#1B192B]">Users By Country</p>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <p className="text-[#1B192B] my-[10px] text-2xl">12.4K</p>
          <div className="flex items-center px-1 py-[2px] justify-center rounded-[2px] border-[0.6px] border-[#05C16833] bg-[#05C16833] ">
            <p className="text-[10px] text-[#14CA74] mr-[2px]">28.5%</p>
            <img src={Arrow.src} alt="" />
          </div>
        </div>
      </div>
      <Bar data={data} options={options} height={300} />
    </div>
  );
};

export default CountryPercentageChart;
