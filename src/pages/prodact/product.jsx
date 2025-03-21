import React from "react";
import "./Product.css";
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
      navigate("login");
    } else {
      navigate("dashbord");
    }
  };

  return (
    <>
      {/* create product  */}
      <div className="bg-info">
        <h1 className="text-center">Product List</h1>
        <div id="show_pro" key={1}>
          {products.map((product) => (
            <div className="border p-4 col-md-4" id="pro_list">
              <div>
                <h3 key={product.id} className="">
                  {product.title}
                </h3>
                <h3 key={product.id} className="">
                  {product.price}
                </h3>
                <button className="btn btn-success" onClick={handelBay}>
                  Bay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
