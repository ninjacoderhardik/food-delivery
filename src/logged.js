import React, { useState } from "react";
import "./Logged.css";
const Login = () => {
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const Handlego = () =>{
  // }
  return (
    <div>
      <h6 style={{ textAlign: "center" }}>Login Page</h6>
      <br />
      <div class="login">
        <form id="login" method="get" action="login.php">
          <label>
            <b>User Name</b>
          </label>
          <input
            type="text"
            name="Uname"
            id="Uname"
            placeholder="Username"
            // onChange={(e) => {
            //   setUserName(e.target.value);
            // }}
          />
          <br />
          <br />
          <label>
            <b>Password</b>
          </label>
          <input
            type="Password"
            name="Pass"
            id="Pass"
            placeholder="Password"
            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
          />
          <br />
          <br />
          <input type="button" name="log" id="log" value="Log In Here"/>
          <br />
          <br />
          <input type="checkbox" id="check" />
          <span>Remember me</span>
          {/* <br />
          <br />
          <span style={{ color: "white" }}> Forgot</span>{" "}
          <a href="#">
            <span style={{ color: "white" }}>Password</span>
          </a> */}
        </form>
      </div>
    </div>
  );
};
export default Login;
