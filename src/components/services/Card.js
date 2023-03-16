import React, { useState } from "react";
import Reveal from "react-reveal/Reveal";
import "./Card.css";
import CardData from "./CardData";
import { ADD } from "../services/actions/action";
import { useDispatch } from "react-redux";
function Card() {
  const [data, setData] = useState(CardData);
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e));
    // alert("Your food is added to the cart");
  };
  return (
    <div className="container ">
      {" "}
      <h2 className="text-center decoration" style={{ color: "white" }}>
        Add To Cart Food
      </h2>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            <>
              <Reveal effect="fadeInUp">
                <div
                  className="card mx-2 mt-4 card_style"
                  style={{ width: "22rem", border: "none" }}
                >
                  <img
                    className="card-img-top mt-3"
                    src={element.imgdata}
                    alt="Card image cap"
                    style={{ height: "16rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{element.rname}</h5>
                    <p className="card-text">Price: ₹ {element.price}</p>
                    <a
                      onClick={() => send(element)}
                      className="btn btn-dark d-flex justify-content-center"
                    >
                      Add To Cart
                    </a>
                  </div>
                </div>
              </Reveal>
            </>
          );
        })}
      </div>
    </div>
  );
}
export default Card;
