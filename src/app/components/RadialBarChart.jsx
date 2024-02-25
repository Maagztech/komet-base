"use client";
import React from "react";
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
// import Chart from "react-apexcharts";

const RadialBarChart = () => {
  const chartOptions = {
    series: [20, 50, 30],
    options: {
      chart: {
        type: "radialBar",
        height: 400,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%",
          },
          dataLabels: {
            name: {
              show: true,
              fontSize: "16px",
            },
            value: {
              show: true,
              fontSize: "14px",
              formatter: function (val) {
                return `${val}%`;
              },
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                return "100K";
              },
            },
          },
        },
      },
      labels: ["Magicaden", "Komet", "Opensea"],
      colors: ["#FFC0CB", "#FF0000", "#008000"],
      legend: {
        show: true,
        position: "bottom", // Position of the legend
        markers: {
          width: 10,
          height: 10,
        },
        formatter: function (seriesName, opts) {
          return `${seriesName} - ${opts.w.globals.series[opts.seriesIndex]}%`; // Custom legend format showing labels and values
        },
      },
    },
  };

  return (
    <div className="bg-slate-50 ml-[20px] mb-[30px] p-[20px] rounded-md pb-[40px] w-1/3">
      <p className="font-semibold">YOOts on Polygon</p>
      {typeof window !== "undefined" && (
        <Chart
          options={chartOptions.options}
          series={chartOptions.series}
          type="radialBar"
          height={400}
        />
      )}
    </div>
  );
};

export default RadialBarChart;
