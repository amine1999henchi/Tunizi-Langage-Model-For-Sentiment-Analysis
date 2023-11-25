import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavSearchEngine from "../Components/NavSearchEngine";
import "../Assets/Signin.css";

function SearchEngine() {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [test, setTest] = useState(true);
  const [result, setResult] = useState(" VIEW RESULT");

  const [positive, setPositive] = useState(false);
  const [sentiment, setSentiment] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  function predict(e) {
    e.preventDefault();

    axios
      .post(
        "http://127.0.0.1:5000/comment/predict",
        {
          content: text,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((result) => {
        console.log(result.data.sentiment);
        setTest(!test);
        if (test === true) {
          setResult("TRY AGAIN");
        } else setResult(" VIEW RESULT");
        if (result.data.sentiment === "positive") {
          setPositive(true);
        } else setPositive(false);
      })
      .catch((err) => {
        console.error("error:${error}");
      });
  }

  function change(e) {
    e.preventDefault();
    setTest(true);
    setResult(" VIEW RESULT");
    setText("");
  }

  return (
    <div>
      <NavSearchEngine />
      <div className="container">
        <h1 className="sentiment-title">
          <b>TUNIZI</b>
        </h1>
        <p className="form-description">
          SENTIMENT ANALYSIS FROM TUNISAIN DIALECT
        </p>
      </div>
      <div className="container">
        {test === false ? (
          <div>
            <div className="group ">
              <input
                className="m-4 p-5 sentiment-sentiment"
                type="text"
                style={{ width: "100%",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
}}
                value={text}
                required
              />
              <p
                style={{
                  marginTop: "20px",
                  fontSize: "30px",
                  width: "100%",
                  color:"black"
                }}
              >
                {" "}
                The sentiment is :{" "}
              </p>
              {positive === true ? (
                <div className="sentiment-classe1"style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                  <p className="sentiment-posneg"> POSITIVE</p>
                </div>
              ) : (
                <div className="sentiment-classe2" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                  <p className="sentiment-posneg"> NEGATIVE</p>
                </div>
              )}
              <div
                className="group m-5"
                style={
                  {
                    // display: "flex",
                    // justifyContent: "center",
                  }
                }
              >
                <input
                  type="submit"
                  value={result}
                  className="p-4"
                  style={{
                    backgroundColor: "#abe9cd",
                    backgroundImage:
                      "linear-gradient(315deg, #1161ee 0%, #3eadcf 74%)",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    color: "#fff",
                    width: "100%",
                    borderRadius: "50px",
                    // fontSize:"20px"
                    borderColor: "none",
                  }}
                  onClick={(e) => change(e)}
                />
              </div>
            </div>
          </div>
        ) : (
          <form class="login-form" method="post">
            <div class="sign-in-htm">
              <div className="group">
                <div class="inner-form">
                  <div class="input-field">
                    <input
                      onChange={(event) => setText(event.target.value)}
                      type="text"
                      name="text"
                      id="text"
                      value={text}
                      placeholder="Search For Sentiment"
                      class="input"
                      required
                      style={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        color: "black",
                      }}
                    />
                    {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                  </div>

                  <div
                    className="group m-5"
                    style={
                      {
                        // display: "flex",
                        // justifyContent: "center",
                      }
                    }
                  >
                    <input
                      type="submit"
                      value={result}
                      onClick={(e) => predict(e)}
                      style={{
                        backgroundColor: "#abe9cd",
                        backgroundImage:
                          "linear-gradient(315deg, #1161ee 0%, #3eadcf 74%)",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      }}
                      class="button"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default SearchEngine;
