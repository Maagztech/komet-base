"use client";
import React, { useState, useEffect, useContext } from "react";
import { Line } from "react-chartjs-2";
import { DataContext } from "@/context/dataContext";
import "chart.js/auto";

const WalletCreationData = () => {
  const { users } = useContext(DataContext);
  const [aggregatedData, setAggregatedData] = useState({
    months: [],
    counts: [],
    cumulativeCounts: [],
  });

  useEffect(() => {
    if (users) {
      const countMap = {};
      users.forEach((item) => {
        const date = new Date(item.createdAt);
        const monthYearKey = `${date.toLocaleString("default", {
          month: "short",
        })}-${date.getFullYear()}`;

        if (!countMap[monthYearKey]) {
          countMap[monthYearKey] = 0;
        }
        countMap[monthYearKey] += 1;
      });

      const months = Object.keys(countMap);
      const counts = Object.values(countMap);
      const cumulativeCounts = counts.map(
        (
          (sum) => (value) =>
            (sum += value)
        )(0)
      );
      setAggregatedData({ months, counts, cumulativeCounts });
    }
  }, [users]);

  const gradient = document.createElement("canvas").getContext("2d");
  const gradientFill = gradient.createLinearGradient(0, 0, 0, 450);
  gradientFill.addColorStop(0, "#F9654F");
  gradientFill.addColorStop(1, "#FF26E9");

  const backgroundGradient = gradient.createLinearGradient(0, 0, 450, 0);
  backgroundGradient.addColorStop(0, "rgba(94, 195, 255, 0.04)");
  backgroundGradient.addColorStop(1, "rgba(253, 93, 239, 0.04)");

  const data = {
    labels: aggregatedData.months,
    datasets: [
      {
        data: aggregatedData.counts,
        borderColor: gradientFill,
        borderWidth: 4,
        tension: 0.3,
        fill: true,
        backgroundColor: backgroundGradient,
        pointRadius: 8, // Increased pointer size
        pointBorderWidth: 2, // Increased pointer border width
        pointHoverRadius: 10, // Increased pointer hover size
        pointBackgroundColor: "#FFFFFF", // Pointer fill color white
        pointBorderColor: gradientFill,
        pointHoverBackgroundColor: "#FFFFFF", // Pointer hover fill color white
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        intersect: false,
        mode: "index",
      },
    },
    scales: {
      x: {
        title: {
          display: false, // Hide the x-axis title
        },
        grid: {
          drawBorder: false,
          drawOnChartArea: true, // Ensure grid lines are drawn
          color: "rgba(3, 2, 41, 0.05)", // Horizontal grid lines color with opacity 5%
          drawTicks: false,
        },
        ticks: {
          padding: 15, // 15px gap between x ticks and graph
        },
      },
      y: {
        display: false, // Hide the y-axis
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    hover: {
      mode: "index",
      intersect: false,
      onHover: function (event, chartElement) {
        const chart = chartElement[0]?.chart;
        if (chart) {
          const ctx = chart.canvas.getContext("2d");
          const x = chartElement[0].element.x;
          const y = chartElement[0].element.y;
          const topY = chart.chartArea.top;
          
          ctx.save();
          ctx.beginPath();
          ctx.setLineDash([5, 5]);
          ctx.moveTo(x, topY);
          ctx.lineTo(x, y);
          ctx.strokeStyle = gradientFill;
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.restore();
        }
      },
    },
    elements: {
      line: {
        borderWidth: 4,
        fill: "start",
      },
      point: {
        radius: 5,
        hoverRadius: 7,
      },
    },
    animation: false,
  };

  return (
    <div className="bg-white ml-[30px] p-[28px] rounded-md pb-[40px] w-full h-[408px] mb-[40px]">
      <p className="font-semibold mb-[36px]">Wallet Created</p>
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default WalletCreationData;
