import React from "react";
import "./Product.css";
import product1 from "../../assets/product1.png";
import { useNavigate } from "react-router-dom";
const Product = () => {
  const products = [
    { id: 1, title: "Laptop", price: "120$" },
    { id: 2, title: "computer", price: "320$" },
    { id: 3, title: "Laptop Core i7", price: "780$" },
  ];

  const navigate = useNavigate();
  // handel bay
  const handelBay = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("isLogedIn")) {
      navigate("/login");
    } else {
      navigate("dashbord");
    }
  };

  return (
    <>
      {/* create product  */}
      <section className="product">
      <div className="card col-6 text-center">
        <img src={product1} height={120} width={120}  className="m-auto"/>
        <div className="card-body">
          <h1 className="card-title">Computer</h1>
          <p className="card-text">Lorem,esecm obcaecati asperiores.</p>
        </div>
      </div>
      </section>
    </>
  );
};

export default Product;
