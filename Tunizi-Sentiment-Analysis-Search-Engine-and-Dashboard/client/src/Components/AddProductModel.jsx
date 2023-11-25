import React, { useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";

function AddProductModel(props) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState();

  const addpro = () => {
    let data = new FormData();
    data.append("file", file);
    data.append("name", name);
    data.append("desc", desc);
    axios
      .post(
        "http://localhost:5000/produit/add",

        data
      )
      .then((result) => {
        props.setModal(false);
        console.log(result);
      })
      .catch((err) => {
        console.error("error:${error}");
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a new product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="container">
          <form role="form" encType="multipart/form-data">
            <div class="form-group">
              <label for="name">Product Name</label>
              <input
                type="text"
                value={name}
                placeholder="Product Name"
                onChange={(event) => setName(event.target.value)}
                class="form-control"
                aria-describedby="Product Name"
              ></input>
            </div>
            <div class="form-group">
              <label for="desc">Description</label>
              <input
                class="form-control"
                type="textarea"
                placeholder="Product Descripton"
                value={desc}
                onChange={(event) => setDesc(event.target.value)}
              ></input>
            </div>
            <div class="form-group">
              <label for="desc">File for Sentiment Analysis</label>
              <input
                class="form-control"
                type="file"
                onChange={(event) => setFile(event.target.files[0])}
              ></input>
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          size="lg"
          color="primary"
          type="button"
          onClick={() => addpro()}
        >
          Add Product
        </Button>
        <Button
          className="btn btn-danger m-4"
          size="lg"
          class=""
          type="button"
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default AddProductModel;
