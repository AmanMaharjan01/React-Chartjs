import React from "react";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart() {
  const from2020 = [4, 2, 2, 1, 5];
  const from2019 = [3, 4, 2, 5, 1];
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2020(M)",
        data: from2020,
        backgroundColor: [
          "rgba(155,206,86,0.4)",
          "rgba(55,6,86,0.4)",
          "rgba(25,116,86,0.4)",
          "rgba(15,209,86,0.4)",
          "rgba(85,106,86,0.4)",
        ],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Line Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1,
          },
        },
      ],
    },
  };
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default DoughnutChart;
