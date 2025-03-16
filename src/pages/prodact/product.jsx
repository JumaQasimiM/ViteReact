import React from "react";

const Product = () => {
  const products = [
    { id: 1, title: "Laptop", price: "120$" },
    { id: 2, title: "computer", price: "320$" },
    { id: 3, title: "Laptop Core i7", price: "780$" },
    { id: 4, title: "Laptop", price: "190$" },
  ];
  const handelClick =(e)=>{
    e.preventDefault();
    if(1===1){
        
        alert('Hello');
    }
  }
  const List = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));

  return (
    <>
      {/* create product  */}
      <div className="bg-info">
        <h1 className="text-center">Product List</h1>
        <>
        {products.map((product) => (
         
          <ul>
            <li key={product.id}>
              {product.title} - {product.price}
            </li>
          </ul>
         
         
           
        ))}
        <button className="btn btn-danger m-4" onClick={handelClick}>create alert</button>
          
        </>
      </div>
    </>
  );
};

export default Product;
