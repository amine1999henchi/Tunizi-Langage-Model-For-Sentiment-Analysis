import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button } from "react-bootstrap";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function WordCard() {
  return (
    <Card class="card"
    style={{
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
      borderRadius: "10px",
    }}
    
    >
        <CardContent>
      <h1>
          What's TUNIZI ?
        
        </h1>
        <h2 variant="h5" component="div">
          tu{bull}ni{bull}zi
        </h2>
        <h5 color="text.secondary">
          /noun/
        </h5>
        <h4 variant="body2" style={{textAlign:"justify"}}>
        Le TUNIZI est une forme du dialecte tunisien composée de caractères latins 
        ainsi que des chiffres utilisés pour dénoter des lettres. Ce système d’encodage 
        a été développé par les utilisateurs tunisiens des réseaux sociaux afin 
        de faciliter l’écriture lors des communications informelles et a connu 
        une utilisation accrue pendant ces dernières années.
        </h4>
        <Button variant="primary" className="mt-4" size="lg">
          Learn More
        </Button></CardContent>
    </Card>
  );
}
