import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Navmain() {



  return (
    <div >
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
            <h1 style={{ float: "center", color: "#fff" }}>
              <a href="/searchenginenew"><b>TUNIZI</b></a>
            </h1>
            
            <h4 style={{ float: "center", color: "#fff" }} className="ml-4">
              <a href="/searchenginenew">Tunisian Language Tool</a>
            </h4>
          </div>
          <Button href="github.com" target="_blank"variant="outline-light" size="lg" >
        <i class="fab fa-md m-2 fa-github"></i>View GitHub Repository
        </Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navmain;
