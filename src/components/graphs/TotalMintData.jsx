"use client";
import React, { useRef, useEffect } from "react";
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

  // Example values for each month
  const dataValues = [12, 19, 3, 5, 2, 3, 9, 7, 4, 6, 10, 8];

  // Function to create a gradient fill for each bar
  const createGradientFill = (chart) => {
    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
    gradient.addColorStop(0, "#F9654F");
    gradient.addColorStop(1, "#FF26E9");
    return gradient;
  };

  // Prepare the chart data
  const data = {
    labels,
    datasets: [
      {
        label: "Mints",
        data: dataValues,
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart render
            return null;
          }

          // Create gradient fill for each bar
          const gradient = createGradientFill(chart);
          const datasetIndex = context.datasetIndex;
          const index = context.dataIndex;

          // Use different opacity levels for each bar if desired
          const opacity = 0.6; // Adjust opacity if needed

          return gradient; // Return the gradient directly
        },
        borderColor: "rgba(0, 0, 0, 0)", // No border color
        borderWidth: 1,
        barThickness: 16,
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      y: {
        border: {
          display: false,
        },
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0)", // Hide Y-axis grid lines
        },
        ticks: {
          callback: function (value) {
            return value + "k"; // Append 'k' to the y-axis values
          },
          padding: 25,
        },
      },
      x: {
        border: {
          display: false,
        },
        grid: {
          color: "rgba(0, 0, 0, 0)", // Hide X-axis grid lines
        },
        ticks:{
          padding: 20,
        }
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // Update chart on component mount
  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = chartRef.current.chartInstance;
      if (chartInstance) {
        chartInstance.data.datasets.forEach((dataset, datasetIndex) => {
          if (dataset.backgroundColor && typeof dataset.backgroundColor === "function") {
            const meta = chartInstance.getDatasetMeta(datasetIndex);
            meta.data.forEach((bar, index) => {
              const context = {
                chart: chartInstance,
                dataIndex: index,
                datasetIndex: datasetIndex,
              };
              const bgColor = dataset.backgroundColor(context);
              if (bgColor) {
                bar.custom = {
                  backgroundColor: bgColor, // Set the background color directly
                };
              }
            });
          }
        });
        chartInstance.update();
      }
    }
  }, []);

  return (
    <div className="bg-white ml-[30px] mb-[40px] p-[28px] rounded-[10px] pb-[60px] w-2/3 flex flex-col justify-between max-h-[450px]">
      <p className="font-semibold mb-[15px]">Number Of Mints</p>
      <Bar data={data} options={options} ref={chartRef} />
    </div>
  );
};

export default TotalMintData;
