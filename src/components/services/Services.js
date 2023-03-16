import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "./services.css";
import cart from "../../assets/cart.png";
import card from "../../assets/card.gif";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { DELETE, ADD, REMOVE } from "./actions/action";
function Services() {
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);
  useEffect(() => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  }, [getdata]);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const send = (e) => {
    dispatch(ADD(e));
  };
  const delet = (id) => {
    dispatch(DELETE(id));
  };
  const remove = (item) => {
    dispatch(REMOVE(item));
  };
  return (
    <div className="services" id="services">
      <Badge
        badgeContent={getdata.length}
        color="primary"
        className="cart-count"
      ></Badge>
      <img
        src={cart}
        className="cart"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {getdata.length ? (
          <div className="card_details card_photo">
            <Table>
              <thead>
                <tr>
                  <th>Photos</th>
                  <th>Restaurant Name</th>
                </tr>
              </thead>
              <tbody>
                {getdata.map((e) => {
                  return (
                    <>
                      <tr>
                        <td>
                          <img src={e.imgdata} className="card_img" />
                        </td>
                        <td>
                          <p>{e.rname}</p>
                          <p>
                            <strong>Price : </strong> ₹ {e.price}
                          </p>
                          <p>
                            <strong>Total : </strong>
                            {e.price * e.qnty}
                          </p>
                          <p>
                            <strong> Quntity : </strong>
                            <span>
                              <button
                                className="btnf"
                                onClick={
                                  e.qnty <= 1
                                    ? () => delet(e.id)
                                    : () => remove(e)
                                }
                              >
                                --
                              </button>
                            </span>
                            {e.qnty}
                            <span>
                              <button className="btnf" onClick={() => send(e)}>
                                +
                              </button>
                            </span>
                          </p>
                          <p className="card_p" onClick={() => delet(e.id)}>
                            <i className="fas fa-trash smalltrash"></i>
                          </p>
                        </td>
                        <td
                          className="mt-5 card_td"
                          onClick={() => delet(e.id)}
                        >
                          <i className="fas fa-trash largetrash"></i>
                        </td>
                      </tr>
                    </>
                  );
                })}
                <p className="text-center">
                  <strong>Total :</strong> ₹ {price}
                </p>
                <div style={{ marginLeft: "50px" }}>
                  <button
                    type="submit"
                    className="registerbtnsw"
                    onClick={() => navigate("/about")}
                  >
                    order now
                  </button>
                </div>
              </tbody>
            </Table>
          </div>
        ) : (
          <div className="card_details d-flex justify-content-center align-items-center why_not">
            <i
              className="fas fa-close smallclose"
              onClick={handleClose}
              style={{
                position: "absolute",
                top: 10,
                right: 20,
                fontSize: 23,
                cursor: "pointer",
              }}
            ></i>
            <p style={{ fontSize: 18 }}>Your Cart Is Empty</p>
            <img
              src={card}
              alt="cart-gif"
              className="emtycart_img"
              style={{ width: "5rem", padding: 10 }}
            />
          </div>
        )}
      </Menu>
      <Card />
    </div>
  );
}
export default Services;
