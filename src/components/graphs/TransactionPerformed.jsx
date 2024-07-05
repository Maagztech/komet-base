"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const TransactionPerformed = () => {
  // Define the x-axis labels for months of 2023 and 2024 (15 data points)
  const labels = [
    "Jan 23", "Feb 23", "Mar 23", "Apr 23", "May 23",
    "Jun 23", "Jul 23", "Aug 23", "Sep 23", "Oct 23",
    "Nov 23", "Dec 23", "Jan 24", "Feb 24", "Mar 24"
  ];

  // Define the datasets with more distinguishable colors
  const datasets = [
    {
      label: "Buy",
      data: [20, 30, 40, 50, 60, 70, 80, 20, 30, 40, 50, 60, 70, 80, 90],
      backgroundColor: "#F9654F",
      barThickness: 7,
    },
    {
      label: "Send",
      data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190],
      backgroundColor: "#FF26E9",
      barThickness: 7,
    },
    {
      label: "Swap",
      data: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170],
      backgroundColor: "#FF6FCF",
      barThickness: 7,
    },
    {
      label: "Bridge",
      data: [60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
      backgroundColor: "#FF99E6",
      barThickness: 7,
    },
  ];

  // Define the data object
  const data = {
    labels,
    datasets,
  };

  // Define the options
  const options = {
    layout: {
      padding: {
        top: 20, // Adjust top padding as needed
        bottom: 20, // Adjust bottom padding as needed
      }
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          color: "rgba(0, 0, 0, 0)", // Decrease opacity of Y-axis grid lines
        },
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          max: labels.length - 1 // Ensure ticks do not overflow
        }
      },
      y: {
        stacked: true,
        ticks: {
          callback: (value) => `${value}K`,
          beginAtZero: true,
        },
        grid: {
          color: "rgba(0, 0, 0, 0)", // Decrease opacity of Y-axis grid lines
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        align: 'end', // Align legend to the right
        labels: {
          usePointStyle: true, // Use point style for legend items
          pointStyle: 'circle'
        },
      },
    },
  };

  return (
    <div className="bg-white ml-[30px] mb-[30px] p-[28px] rounded-md" style={{ width: 'calc(2/3 * 100vw - 8px)' }}>
      <p className="font-semibold mb-4">Total Transaction Performed</p>
      <div style={{ maxHeight: '450px', overflow: 'auto' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default TransactionPerformed;
