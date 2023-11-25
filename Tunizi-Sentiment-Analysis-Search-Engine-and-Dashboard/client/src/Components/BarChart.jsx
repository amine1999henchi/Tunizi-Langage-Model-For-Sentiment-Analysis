import React from "react";
import { Chart } from "react-google-charts";


function generateRandomColor() {
  var colors =["#2d79c5","#2c49a0","#424252","#778899"]
  return colors [Math.floor(Math.random() * 4)]
}

export default function BarChart(props) {
  var data=[["Element", "Density", { role: "style" }]]
  for (let i = 0; i < 40; i++){
    data.push([String(props.prediction.freq[i][0]) , props.prediction.freq[i][1], generateRandomColor()])
    ;
    
}
  return (
    <Chart chartType="ColumnChart" width="95%" height="400px" data={data} style={{marginLeft:"10px",paddingBottom:"50px"}} />
  );
}