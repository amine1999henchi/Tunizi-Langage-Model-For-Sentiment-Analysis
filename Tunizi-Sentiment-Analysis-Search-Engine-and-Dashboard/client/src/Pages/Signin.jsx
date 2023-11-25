import "../Assets/Signin.css";
import Signinpic from "../Assets/Images/signinpic.png";
import TuniziLogo from "../Assets/Images/Tunizi Logo.png";
import React, { useState } from "react";
import "../Assets/Login.css";
import { useNavigate } from "react-router";
import axios from "axios";
import Navmain from "../Components/Navmain";
function Signin() {
  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(undefined);

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(
        "http://localhost:5000/user/login",

        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("jwt", res.data.token);
        setStatus({ type: "success" });

        setTimeout(() => history("/home"), 1000);
        setTimeout(() => window.location.reload(), 1000);
      })
      .catch((err) => {
        console.log("err", err);

        setStatus({ type: "error" });
        setPassword("");
        setUsername("");
        setTimeout(() => window.location.reload(), 1570);
      });
  }

  return (
    <div>
      <Navmain />

      <div className="container">
        <section class="">
          <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-md-9 col-lg-6 col-xl-6">
                <div>
                  <img
                    src={Signinpic}
                    style={{ maxWidth: "500px", maxHeight: "500px" }}
                  />
                </div>
              </div>
              <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <div
                  className="mb-5 mt-5 pt-4"
                  style={{
                    margin: "auto",
                    width: "100%",
                    width: "100%",
                    height: "auto",
                    textAlign: "center",
                  }}
                >
                  <h1>
                    WELCOME TO <b>TUNIZI</b>
                  </h1>
                  <p>Impot your dataset and get a view of the stats</p>
                </div>
                <form class="login-form" method="post" onSubmit={handleSubmit}>
                  <div class="sign-in-htm">
                    <div class="group">
                      <label for="user">Username</label>
                      <input
                        id="user"
                        type="text"
                        placeholder="Username"
                        class="input"
                        name="username"
                        style={{
                          boxShadow:
                            "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                          color: "black",
                        }}
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                      />
                    </div>
                    <div class="group">
                      <label for="pass">Password</label>
                      <input
                        id="pass"
                        type="password"
                        placeholder="Password"
                        class="input"
                        data-type="password"
                        name="password"
                        value={password}
                        style={{
                          boxShadow:
                            "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                          color: "black",
                        }}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                      />
                    </div>

                    <div class="group">
                      <input
                        type="submit"
                        style={{
                          backgroundColor: "#abe9cd",
                          backgroundImage:
                            "linear-gradient(315deg, #1161ee 0%, #3eadcf 74%)",
                          boxShadow:
                            "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        }}
                        class="button"
                        value="Sign In"
                      />
                    </div>
                    <div>
                      <a href="/resetpassword">Forgot password?</a>
                      <p>
                        Don't have an account?
                        <a href="/signupnew"> Register here</a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Signin;
