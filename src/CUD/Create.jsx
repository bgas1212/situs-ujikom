import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [foodName, setFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodDesc, setFoodDesc] = useState("");
  const [foodImg, setFoodImg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new food item object
    const newFoodItem = {
      nama: foodName,
      deskripsi: foodDesc,
      harga: parseFloat(foodPrice),
      gambar: foodImg,
    };

    try {
      const response = await fetch("http://localhost:3000/dataMakanan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFoodItem),
      });

      if (response.ok) {
        console.log("Food item added successfully!");
        // Optionally, you can update your local state or perform other actions
      } else {
        console.error("Failed to add food item.");
      }
    } catch (error) {
      console.error("Error adding food item:", error);
    }
    navigate("/");
  };


  return (
    <div>
      <h2>Add a New Food Item</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="foodName">Food Name:</label>
        <input
          type="text"
          id="foodName"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />

        <label htmlFor="foodDesc">Food Description:</label>
        <input
          type="text"
          id="foodDesc"
          value={foodDesc}
          onChange={(e) => setFoodDesc(e.target.value)}
        />

        <label htmlFor="foodPrice">Price:</label>
        <input
          type="number"
          id="foodPrice"
          value={foodPrice}
          onChange={(e) => setFoodPrice(e.target.value)}
        />

        <label htmlFor="foodImg">Image:</label>
        <input
          type="text"
          id="foodImg"
          value={foodImg}
          onChange={(e) => setFoodImg(e.target.value)}
        />
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}
