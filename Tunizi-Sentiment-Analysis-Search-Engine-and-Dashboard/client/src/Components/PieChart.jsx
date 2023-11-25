import React from "react";
import { Chart } from "react-google-charts";


export default function Graph(props) {

  const data = [
    ["Sentiment", "Analysis"],
    ["Positive", props.prediction.positive ],
    ["Negative", props.prediction.neg ],
     // Below limit.
  ];
  
  const options = {
    title: "Sentiment Score Partition",
    sliceVisibilityThreshold: 0.2
  };

  return (
    <Chart
      
      chartType="PieChart"
      data={data}
      options={options}
      width={"500px"}
      height={"450px"}
    />
  );
}


