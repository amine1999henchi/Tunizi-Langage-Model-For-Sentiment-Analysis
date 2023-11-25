import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button } from "react-bootstrap";
import CardMedia from "@mui/material/CardMedia";

function HomeCard() {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <Card
      class="card"
      style={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
        borderRadius: "10px",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://picsum.photos/1000/360"
        style={{ objectFit: " cover", 
        borderTopRightRadius:' 10px',
        borderTopLeftRadius:' 10px'}}
      />
      <CardContent>
        <h1>EXPLORE TUNIZI</h1>

        <Button variant="outline-dark" size="lg">
          <i class="fab fa-md m-2 fa-github"></i>View GitHub Repository
        </Button>
      </CardContent>
    </Card>
  );
}

export default HomeCard;
