import React, { useState } from "react";

function ToyForm({ onNewToyFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    likes: 0
  })

  function handleInputChange(e) {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    onNewToyFormSubmit(formData)
    setFormData({
      name: "",
      image: "",
      likes: 0
    })
  }
  console.log(formData)
  
  return (
    <div className="container">
      <form onSubmit={handleFormSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          value={formData.name}
          onChange={handleInputChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          value={formData.image}
          onChange={handleInputChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
