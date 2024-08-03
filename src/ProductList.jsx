import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice"; // Import the addItem action from CartSlice
import "./ProductList.css";
import CartItem from "./CartItem";

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({}); // State to track added products
  const dispatch = useDispatch(); // Get dispatch function from Redux

  const cartItems = useSelector((state) => state.cart.items); // Retrieve cart items from Redux store

  const plantsArray = [
    // Example plant data (you should replace this with your actual plant data)
    {
      category: "Indoor Plants",
      plants: [
        {
          name: "Fern",
          description: "A lush green plant",
          cost: "$15.00",
          image: "fern_image_url",
        },
        // more plants...
      ],
    },
    // more categories...
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 })); // Dispatch the addItem action with plant details and default quantity
    setAddedToCart((prevState) => ({ ...prevState, [plant.name]: true })); // Update local state
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      <div
        className="navbar"
        style={{
          backgroundColor: "#4CAF50",
          color: "#fff!important",
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "20px",
        }}
      >
        <div className="tag">
          <div className="luxury">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
              alt=""
            />
            <a href="/" style={{ textDecoration: "none" }}>
              <div>
                <h3 style={{ color: "white" }}>Paradise Nursery</h3>
                <i style={{ color: "white" }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "1100px",
          }}
        >
          <div>
            <a
              href="#"
              onClick={handlePlantsClick}
              style={{
                color: "white",
                fontSize: "30px",
                textDecoration: "none",
              }}
            >
              Plants
            </a>
          </div>
          <div>
            <a
              href="#"
              onClick={handleCartClick}
              style={{
                color: "white",
                fontSize: "30px",
                textDecoration: "none",
              }}
            >
              <h1 className="cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="IconChangeColor"
                  height="68"
                  width="68"
                >
                  <rect width="156" height="156" fill="none"></rect>
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="184" cy="216" r="12"></circle>
                  <path
                    d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                    fill="none"
                    stroke="#faf9f9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    id="mainIconPathAttribute"
                  ></path>
                </svg>
              </h1>
            </a>
          </div>
        </div>
      </div>
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h2>{category.category}</h2>
              <div className="product-grid">
                {category.plants.map((plant, idx) => (
                  <div className="product-card" key={idx}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="product-image"
                    />
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p>{plant.cost}</p>
                    <button onClick={() => handleAddToCart(plant)}>
                      {addedToCart[plant.name]
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
