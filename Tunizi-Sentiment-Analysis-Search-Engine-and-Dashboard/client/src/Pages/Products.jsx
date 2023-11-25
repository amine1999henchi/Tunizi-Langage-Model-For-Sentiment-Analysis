import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar1 from "../Components/Sidebar1";
import Navbar from "../Components/Navbar";
import Graph from "../Components/PieChart";
import AreaChart from "../Components/AreaChart";
import Stat from "../Components/Stat";
import axios from "axios";
import "../Assets/Home.css";
import BarChart from "../Components/BarChart";
import NewSide from "../Components/NewSide";
import ProdDesc from "../Components/ProdDesc";
function Products() {
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
    <div>
      <div class="wrapper d-flex align-items-stretch">
        {/* <Navbar /> */}
        <nav id="sidebar">
          <NewSide />
          {/* <Sidebar1 setDesc={setDesc} /> */}
        </nav>
        <div id="content" class="p-4 p-md-5 pt-5">
          <ProdDesc />
          <Stat prediction={prediction} />
          <div className="home-container m-2">
            <Graph prediction={prediction}/>

            {/* <AreaChart /> */}
            
            {Object.values(prediction).length !== 0 ? (
              <BarChart prediction={prediction} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
