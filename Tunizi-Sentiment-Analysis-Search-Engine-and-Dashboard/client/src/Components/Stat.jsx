import React, { useState , useEffect } from "react";
import "antd/dist/antd.css";
import "../Assets/Stat.css";
import StatCard from "./StatCard";
import axios from "axios";
import { useParams } from "react-router-dom";

function Stat(props) {

  const [prediction, setPrediction] = useState({});
  const [desc, setDesc] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getProducts();
    getDescription();
  }, []);

  const getProducts = () => {
    setPrediction({});
    axios
      .get(`http://localhost:5000/produit/predict/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        console.log(result.data.freq[0][0]);

        setPrediction(result.data);
      })
      .catch((err) => {
        console.error("error:${error}");
      });
  };

  const getDescription = () => {
    setPrediction({});
    axios
      .get(`http://localhost:5000/produit/get/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        setDesc(result.data.desc);
      })
      .catch((err) => {
        console.error("error:${error}");
      });
  };




  return (
    
        <div className="container">
          <div className="row">
            <StatCard prediction={prediction}/>
          </div>
          {/* <div class="row">
              <div class="col-xl-3 col-lg-20" style={{ marginRight: "50px" }}>
                <div class="card card-stats mb-6 mb-xl-0">
                  <div></div>
                  <div class="card-body" style={{ height: "120px" }}>
                    <div class="row">
                      <div class="col">
                        <h5
                          style={{ fontSize: "10px" }}
                          class="card-title text-uppercase text-muted mb-0"
                        >
                          Comments Number
                        </h5>
                        <span class="h2 font-weight-bold mb-0">
                          {props.prediction.neg + props.prediction.positive}
                        </span>
                      </div>
                      <div class="col-auto">
                        <div class="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i class="fas fa-chart-pie"></i>
                        </div>
                      </div>
                    </div>
                    <p class="mt-3 mb-0 text-muted text-sm">
                      <span class="text-success mr-2">
                        <i class="fas fa-arrow-up"></i> 3.48%
                      </span>
                      <span class="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-20" style={{ marginRight: "50px" }}>
                <div class="card card-stats mb-6 mb-xl-0">
                  <div class="card-body" style={{ height: "120px" }}>
                    <div class="row">
                      <div class="col">
                        <h5
                          style={{ fontSize: "10px" }}
                          class="card-title text-uppercase text-muted mb-0"
                        >
                          Negative
                        </h5>
                        <span class="h2 font-weight-bold mb-0">
                          {props.prediction.neg}
                        </span>
                      </div>
                      <div class="col-auto">
                        <div class="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i class="fas fa-chart-pie"></i>
                        </div>
                      </div>
                    </div>
                    <p class="mt-3 mb-0 text-muted text-sm">
                      <span class="text-danger mr-2">
                        <i class="fas fa-arrow-down"></i> 3.48%
                      </span>
                      <span class="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-20">
                <div class="card card-stats mb-6 mb-xl-0">
                  <div class="card-body" style={{ height: "120px" }}>
                    <div class="row">
                      <div class="col">
                        <h5
                          style={{ fontSize: "10px" }}
                          class="card-title text-uppercase text-muted mb-0"
                        >
                          Positive
                        </h5>
                        <span class="h2 font-weight-bold mb-0">
                          {props.prediction.positive}
                        </span>
                      </div>
                      <div class="col-auto">
                        <div class="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i class="fas fa-chart-pie"></i>
                        </div>
                      </div>
                    </div>
                    <p class="mt-3 mb-0 text-muted text-sm">
                      <span class="text-success mr-2">
                        <i class="fas fa-arrow-up"></i> 3.48%
                      </span>
                      <span class="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
        
      
  );
}

export default Stat;
