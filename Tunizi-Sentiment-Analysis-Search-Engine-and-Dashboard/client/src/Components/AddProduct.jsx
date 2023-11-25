import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Modal,
  Input,
  Label,
} from "reactstrap";

function AddProduct(props) {
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
      className="modal-dialog-centered"
      isOpen={props.isOpen}
      toggle={() => {
        props.setModal(!props.isOpen);
      }}
    >
        <CardHeader className="bg-transparent pb-1">
          <h3> ADD A NEW PRODUCT </h3>
        </CardHeader>

        <CardBody className="px-lg-5 py-lg-5">
          <Form role="form" encType="multipart/form-data">
            <FormGroup>
              <Label> PRODUCT NAME </Label>
              <Input
                type="text"
                value={name}
                placeholder="Product Name*"
                onChange={(event) => setName(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label> DESCRIPTION </Label>
              <Input
                type="textarea"
                placeholder=" description* "
                value={desc}
                onChange={(event) => setDesc(event.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label> File feedbacks for Sentiment Analysis </Label>
              <Input
                type="file"
                placeholder=" File*"
                onChange={(event) => setFile(event.target.files[0])}
              />
            </FormGroup>
          </Form>
        </CardBody>

        <div className="text-center d-grid gap-2">
          <Button
            className="m-4"
            size="lg"
            color="primary"
            type="button"
            onClick={() => addpro()}
          >
            ADD
          </Button>
        </div>
    </Modal>

  );
}

export default AddProduct;
