import React from "react";
import "../Assets/StatCard.css";

function StatCard(props) {
  return (
    <div>
      <div class="container">
        <div class="row" style={{display:'space-around'}}>
          <div class="col-md-4 col-xl-4">
            <div class="card bg-c-green order-card m-4">
              <div class="card-block">
                <h2 style={{ color: "white" }}>All Comments</h2>
                <p>
                  <i class="fa fa-times" aria-hidden="true"></i>
                  <span class="f-right">{props.prediction.neg+props.prediction.positive}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-xl-4">
            <div class="card bg-c-blue order-card m-4">
              <div class="card-block">
                <h2 style={{ color: "white" }}>Positive Comments</h2>
                <p>
                  <i class="fa fa-check" aria-hidden="true"></i>
                  <span class="f-right">{props.prediction.positive} </span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-xl-4">
            <div class="card bg-c-pink order-card m-4">
              <div class="card-block">
                <h2 style={{ color: "white" }}>Negative Comments</h2>
                <p>
                  <i class="fa fa-times" aria-hidden="true"></i>
                  <span class="f-right">{props.prediction.neg}</span>
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default StatCard;
