import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function DashboardSalesChart() {
  const colorPalette = ["#FF784B", "#2DD4BF"];
  const [state] = useState({
    series: [
      {
        name: "Product 1",
        data: [
          10, 41, 35, 51, 49, 62, 69, 91, 148, 28, 57, 93, 12, 77, 60, 32, 21,
          45, 80, 15, 62, 40, 85, 97, 51, 20,
        ],
      },
      {
        name: "Product 2",
        data: [
          15, 51, 37, 51, 10, 45, 42, 9, 14, 64, 39, 23, 16, 33, 55, 72, 88,
          100, 47, 30, 22, 58, 44, 19, 81, 75,
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      stroke: {
        show: true,
        width: 2,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        line: {
          markers: {
            size: 5,
          },
        },
      },
      yaxis: {
        title: {
          text: "Total Sales (CAD)",
        },
        style: {
          fontSize: "12px",
        },
      },
      xaxis: {
        categories: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
        ],
      },
      colors: colorPalette,
      fill: {
        colors: colorPalette,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " units";
          },
        },
      },
      grid: {
        row: {
          colors: ["transparent"],
          opacity: 0.5,
        },
        column: {
          colors: ["transparent"],
        },
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
    },
  });


  return (
      <ReactApexChart
        options={state.options}
        series={state.series}
        height={350}
      />
  );
}

export default DashboardSalesChart;
