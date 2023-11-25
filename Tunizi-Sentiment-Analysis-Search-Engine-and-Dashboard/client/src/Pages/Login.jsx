import React,{useState} from 'react'
import "../Assets/Login.css"
import { useNavigate } from 'react-router';
import axios from 'axios';


export default function Login() {

    const history = useNavigate()

    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
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
        setStatus({ type: 'success' })
        
        setTimeout(() => history("/home"), 1000);
        setTimeout(() => window.location.reload(), 1000);

      })
      .catch((err) => {
        
        console.log('err',err);
        
        setStatus({ type: 'error' });
        setPassword("")
        setUsername("")
        setTimeout(() => window.location.reload(), 1570);
        
      });
    }


  return (
    <div class='login-container'>

      <div>
        {status?.type === 'success' &&
          <div class="alert alert-success" role="alert" style={{marginLeft:"500px",marginBottom:"20px",width:"525px",marginTop:"-20px"}}>
            Congratulation you sucessfully Signed IN 
          </div>}
        {status?.type === 'error' &&
          (
            <div class="alert alert-danger" role="alert" style={{marginLeft:"500px",marginBottom:"20px",width:"525px",marginTop:"-20px"}}>
            Username or Password is incorrect  ! Please try again 
          </div>
          )}
      </div>
    <div class="login-wrap">
    <div class="login-html">
      <input id="tab-1" type="radio" name="tab" class="sign-in" checked  /><label style={{marginLeft:"150px"}} for="tab-1" class="tab">Sign In</label>
      <input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab"></label>
      
      <form class="login-form" method="post" onSubmit={handleSubmit}>
        <div class="sign-in-htm">
          <div class="group">
            <label for="user" class="label">Username</label>
            <input id="user" type="text" class="input" name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required />
          </div>
          <div class="group">
            <label for="pass" class="label">Password</label>
            <input id="pass" type="password" class="input" data-type="password" name="password" 
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            />
          </div>
          <div class="group">
            <input id="check" type="checkbox" class="check" checked/>
            <label for="check"><span class="icon"></span> Keep me Signed in</label>
          </div>
          <div class="group">
            <input type="submit" class="button" value="Sign In"/>
          </div>
          <div class="hr"></div>
          
        </div>
        
      </form>
     
    
    </div>
  </div>
  </div>
  )
}

