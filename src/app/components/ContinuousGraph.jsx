"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const ContinuousGraph = () => {
  const data = {
    labels: [
      "January 2023",
      "February 2023",
      "March 2023",
      "April 2023",
      "May 2023",
      "June2023",
      "July 2023",
    ],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        backgroundColor: "rgba(255, 0, 0, 0.7)", // Light green fill
        borderColor: "rgb(255, 0, 0)", // Line color
        tension: 0.1,
      },
      {
        label: "Profit",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: true,
        backgroundColor: "rgba(0, 0, 255, 0.7)", // Light red fill
        borderColor: "rgb(0, 0, 255)", // Line color
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Week Starting',
          color: '#000000',
          font: {
            size: 16
          },
          padding: {top: 20, left: 0, right: 0, bottom: 0}
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Cumulative Sales',
          color: '#000000',
          font: {
            size: 16
          },
          padding: {top: 30, left: 0, right: 0, bottom: 0}
        },

      }
    }
  };


  return (
    <div className="bg-slate-50 ml-[20px] my-[30px] p-[20px] rounded-md pb-[40px]">
      <p className="font-semibold">Cummulative Sales Stats</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default ContinuousGraph;