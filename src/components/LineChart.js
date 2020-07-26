import React from "react";
import { Line } from "react-chartjs-2";

function lineChart() {
  const from2020 = [4, 2, 2, 1, 5];
  const from2019 = [3, 4, 2, 5, 1];
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2020(M)",
        data: from2020,
        borderColor: ["rgba(255,206,86,0.4)"],
        backgroundColor: ["rgba(255,206,86,0.4)"],
        pointBackgroundColor: ["rgba(255,206,86,0.4)"],
        pointBorderColor: ["rgba(255,206,86,0.4)"],
      },
      {
        label: "Sales for 2019(M)",
        data: from2019,
        borderColor: ["rgba(155,206,86,0.4)"],
        backgroundColor: ["rgba(155,206,86,0.4)"],
        pointBackgroundColor: ["rgba(155,206,86,0.4)"],
        pointBorderColor: ["rgba(155,206,86,0.4)"],
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
      <Line data={data} options={options} />
    </div>
  );
}

export default lineChart;
