import React, { useState, useEffect } from "react";
import "../Assets/NewSide.css";
import AddProduct from "./AddProduct";
import axios from "axios";
import { useNavigate } from "react-router";
import AddProductModel from "./AddProductModel";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NewSide() {
  const [openModal, setOpenModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const history = useNavigate();

  function handleClick() {
    history("/searchEngineNew");
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
    <>
      <div class="wrapper d-flex align-items-stretch">
        <nav id="sidebar">
          <div class="custom-menu">
            <button type="button" id="sidebarCollapse" class="btn btn-primary">
              <i class="fa fa-bars"></i>
            </button>
          </div>
          <div class="p-4 pt-5">
            <h1 className="mb-5">
              <a href="/home" class="logo">
                TUNIZI
              </a>
              <h4 style={{ color: "#fff" }}>Tunisian Language Model</h4>
            </h1>
            <ul class="list-unstyled components mb-5">
              <li class="active">
                <a href="/home">
                  <i class="fa fa-tachometer-alt m-2"></i> Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#pageSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                >
                  <i class="fa fa-archive m-2" aria-hidden="true"></i>
                  Products
                </a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                  {products.map((product, i) => {
                    return (
                      <li onClick={() => window.location.reload()}>
                        <Link to={`/products/${product.id}`}>
                          {product.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li>
                <a
                  style={{
                    backgroundColor: "white",
                    color: "#3376D5",
                    justifyContent: "center",
                    borderRadius: "20px",
                  }}
                  class="m-4"
                  onClick={() => setModalShow(true)}
                >
                  <i class="fa fa-plus ml-4 mr-4" aria-hidden="true"></i>Add a Product{" "}
                </a>

                <AddProductModel
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </li>
            </ul>
            <ul class="list-unstyled CTAs">
              <li>
                <a class="article" onClick={() => handleClick()}>
                  <i class="fa fa-sign-out m-2" aria-hidden="true"></i>
                  Logout
                </a>
              </li>
            </ul>
            <div class="footer">
              <p>
                Copyright &copy; All rights reserved | PCD TUNIZI 2022 - ENSI
              </p>
            </div>
          </div>
        </nav>
      </div>
      <AddProductModel
        setModal={setOpenModal}
        isOpen={openModal}
        product={products}
        setProducts={setProducts}
      />
    </>
  );
}

export default NewSide;
