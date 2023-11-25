import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavSearchEngine() {
  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "#abe9cd",
          backgroundImage: "linear-gradient(315deg, #1161ee 0%, #3eadcf 74%)",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          color: "#fff",
        }}
      >
        <Container class='ml-4'>
          <div
            style={{
              alignContent: "center",
              alignItems: "center",
              display: "flex",
              cursor: "pointer",
            }}
          >
            <h1 style={{  float: "center", color: "#fff" }}>
              <a href="/home">
                <b>TUNIZI</b>
              </a>
            </h1>

            <h4 style={{ float: "center", color: "#fff" }} className="ml-4">
              <a href="/home">Tunisian Language Tool</a>
            </h4>
          </div>
          <div
        
          >
            <a
            href="/signupnew"
            variant="primary"
              size="lg"
              class="m-4"
            >
              <i class=" mr-2 fa-solid fa-user-plus"></i>Sign up
            </a>
            <a
            href="/signin"
              variant="danger"
              size="lg"
              class="m-5"
            >
              <i class=" mr-2 fa-solid fa-right-to-bracket"></i>Sign in
            </a>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavSearchEngine;
