import React from "react";


import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Juil","Aug","Sep","Oct","Nov","Dec"],
  datasets: [
    {
      label: "Positive ",
      data: [33, 53, 24, 41, 100, 65,22,45,40,5,17,20],
      fill: true,
      
      borderColor: "#220a99"
    },
    {
      label: "Negative",
      data: [67, 47, 45, 17, 56, 35,58,40,20,32,56,50],
      fill: false,
      
      borderColor: "#cd3910"
    }
  ]
};

export default function AreaChart() {
  return (
    <div style={{width:"700px"}}>
      <Line data={data} />
    </div>
  );
}
