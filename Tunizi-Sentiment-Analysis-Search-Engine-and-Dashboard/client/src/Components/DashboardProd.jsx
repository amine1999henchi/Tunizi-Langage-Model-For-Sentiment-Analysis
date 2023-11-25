import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Table } from "react-bootstrap";

import { useNavigate } from "react-router";
function DashboardProd() {
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const history = useNavigate();

  function handleClick() {
    history("/");
  }
  const getProducts = () => {
    axios
      .get("http://localhost:5000/produit/get", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        setProducts(result.data);
      })
      .catch((err) => {
        console.error("error:${error}");
      });
  };
  return (
    <div>
        

        
        <Table  bordered hover responsive style={{fontSize:'20px'}}>
          <thead style={{backgroundColor:"#3677D5",color:'white'}}>
            <tr>
              <th class="col-xs-3">Product ID</th>
              <th>Product Name</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => {
              return (
                <tr>
                  <td class="col-xs-3" onClick={() => window.location.reload()} >
                    <Link to={`/products/${product.id}`}>{product.id}</Link>
                  </td>
                  <td onClick={() => window.location.reload()}>
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
  );
}

export default DashboardProd;
