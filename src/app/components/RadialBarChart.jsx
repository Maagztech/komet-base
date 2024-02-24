"use client";
import React from "react";
import Chart from "react-apexcharts";

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
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="radialBar"
        height={400}
      />
    </div>
  );
};

export default RadialBarChart;
// import React from 'react';
// import ReactApexChart from 'react-apexcharts';

// const RadialBarChart = () => {
//   const series = [20, 50, 30];
//   const options = {
//     chart: {
//       height: 350,
//       type: 'radialBar',
//     },
//     plotOptions: {
//       radialBar: {
//         hollow: {
//           size: '70%',
//         },
//         dataLabels: {
//           name: {
//             show: false,
//           },
//           value: {
//             fontSize: '22px',
//             formatter: function (val) {
//               return val + "%";
//             }
//           },
//           total: {
//             show: true,
//             label: 'Total',
//             formatter: function (w) {
//               return '100K';
//             }
//           }
//         },
//         track: {
//           background: '#f3f3f3',
//           strokeWidth: '97%', // Makes the track almost full, leaving only thin lines for bars
//         },
//       }
//     },
//     colors: ['#FFC0CB', '#FF0000', '#008000'], // Pink, Red, Green
//     labels: ['Magicaden', 'Komet', 'Opensea'],
   
//   };

//   return (
//     <div>
//       <ReactApexChart options={options} series={series} type="radialBar" height={350} />
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <hr style={{ width: '20px', margin: '0 5px', borderTop: '3px solid #FFC0CB' }} /> Magicaden - 20%
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <hr style={{ width: '20px', margin: '0 5px', borderTop: '3px solid #FF0000' }} /> Komet - 50%
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <hr style={{ width: '20px', margin: '0 5px', borderTop: '3px solid #008000' }} /> Opensea - 30%
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RadialBarChart;

