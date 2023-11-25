import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import { fontFamily } from "@mui/system";

function ProdDesc() {
  const [prediction, setPrediction] = useState({});
  const [desc, setDesc] = useState("");
  const [name, getNameProd] = useState("");
  
  const { id } = useParams();

  useEffect(() => {
    getProducts();
    getDescription();
    getName();
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

  const getName = () => {
    setPrediction({});
    axios
      .get(`http://localhost:5000/produit/get/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        getNameProd(result.data.name);
      })
      .catch((err) => {
        console.error("error:${error}");
      });
  };
  return (
    <div>
      <div class="card" style={{borderRadius:"5px",}}>
        <div class="card-header" style={{backgroundColor:'#3977D5', 
                                        color:'#fff',//fontFamily:"gilroy-bold",
                                        borderTopLeftRadius:"5px",
                                        borderTopRightRadius:"5px"}}>
        Product Description :
        </div>
        <div class="card-body">
          <h3 class="card-title">Product Name : <b>{name}</b></h3>
          <h3 class="card-title">Product ID :<b> {id}</b></h3>
          <p class="card-text"></p>
          <p class="card-text">Product Description : <b>{desc}</b></p>
        </div>
      </div>
    </div>
  );
}

export default ProdDesc;
