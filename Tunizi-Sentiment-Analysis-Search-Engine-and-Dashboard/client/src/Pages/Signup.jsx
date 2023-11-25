import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { useState, useEffect } from "react"
import axios from 'axios';


function Signup() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [company, setCompany] = useState("")
  const [status, setStatus] = useState(undefined);


  

  const addUser = (e) => {
    e.preventDefault();


    axios.post("http://localhost:5000/user/register",

      {
        "username": username,
        "password": password,
        "company": company

      },
      {
        headers: {
          "Content-Type": "application/json",

        },
      })
      .then((result) => {

        console.log(result.data)
        setStatus({ type: 'success' })
        setUsername("")
        setCompany("")
        setPassword("")


      })
      .catch((err) => {
        console.error("error:${error}");
        setStatus({ type: 'error', err })



      });

  }

  return (
    <div class='login-container'>

      <><div>
        {status?.type === 'success' &&
          <div class="alert alert-success" role="alert" style={{marginLeft:"500px",marginBottom:"20px",width:"525px",marginTop:"-20px"}}>
            Congratulation you sucessfully Signed Up ! Please <Link to="/login" style={{color:"blue"}}> Login </Link> to get into your account.
            
          </div>}
        {status?.type === 'error' &&
          (
            <div class="alert alert-danger" role="alert" style={{marginLeft:"500px",marginBottom:"20px",width:"525px",marginTop:"-20px"}}>
            Username already taken ! Please try again or  <Link to="/login" style={{color:"blue"}}> Login</Link> to your account. 
          </div>
          )}
      </div>
        <div class="login-wrap">
          <div class="login-html">
            <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label style={{ marginLeft: "150px" }} for="tab-1" class="tab">Sign Up</label>
            <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab"></label>

            <form class="login-form" method="post" onSubmit={addUser}>
              <div class="sign-in-htm">
                <div class="group">
                  <label for="user" class="label"  >Username </label>
                  <input id="user" type="text" class="input" name="username" required
                    onChange={(event) => setUsername(event.target.value)}
                    value={username} />
                </div>
                <div class="group">
                  <label for="user" class="label" > Company </label>
                  <input id="company" type="text" class="input" name="company" required
                    onChange={(event) => setCompany(event.target.value)}
                    value={company} />
                </div>
                <div class="group">
                  <label for="pass" class="label" > Password </label>
                  <input id="pass" type="password" class="input" data-type="password" name="password" required
                    onChange={(event) => setPassword(event.target.value)}
                    value={password} />
                </div>

                <div class="group">
                  <input style={{ marginTop: "50px" }} type="submit" class="button" value="Sign Up" />
                </div>


              </div>

            </form>


          </div>
        </div>
      </>
    </div>

  )
}

export default Signup