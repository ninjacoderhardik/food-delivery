import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./About.css";
import { useSelector } from "react-redux";
const About = () => {
  const navigate = useNavigate();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8cf7pgw",
        "template_4wxvoln",
        form.current,
        "7bjyUiSTG3JgpRgdo"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("your order is successfully done");
          console.log("message send");
        },
        (error) => {
          console.log(error.text);
          alert("error");
          console.log("error");
        }
      );
  };
  const [nameA, setNameA] = useState("");
  const [emailA, setEmailA] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Address, setAddress] = useState("");
  const getdata = useSelector((state) => state.cartreducer.carts);
  const getstr = () => {
    let str = "";
    getdata.forEach((ele) => {
      str += `productname : 
       ${ele.imgdata}, 
       ${ele.rname}, 
        ${ele.qnty} , 
        ${ele.price}
      `;
    });
    return str;
  };
  return (
    <div className="containersss">
      <section id="contact">
        <h1 style={{ textAlign: "center" }}>Order Now</h1>
        <div id="contact-box">
          <form action="" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label for="user_name">Name: </label>
              <input
                style={{ background: "white" }}
                type="text"
                name="user_name"
                id="name"
                placeholder="Enter your name"
                onChange={(e) => {
                  setNameA(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label for="user_email">Email: </label>
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="Enter your email"
                onChange={(e) => {
                  setEmailA(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label for="user_phonenumber">Phone Number: </label>
              <input
                type="phone"
                name="user_phonenumber"
                id="phone"
                placeholder="Enter your phone"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label for="user_address">Address: </label>
              <input
                type="text"
                name="user_address"
                id="phone"
                placeholder="Enter Your Address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                required
              />
            </div>
            <input
              type="text"
              name="orders"
              style={{ display: "none" }}
              value={getstr()}
            />
            <input
              type="submit"
              className="registerbtncp"
              value="Submit"
              onClick={() => {
                console.log("getData", getdata);
              }}
            />
             <input
              type="submit"
              className="registerbtncp"
              value="Back To Home"
              onClick={() => navigate("/home")}
            />
          </form>
        </div>
      </section>
    </div>
  );
};
export default About;