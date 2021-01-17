import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API_URL = "http://localhost:3001/toys"

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then(r => r.json())
      .then(toysObject => {
        setToys(toysObject)
      })
  }, [] )

  function handleAddToyClick() {
    setShowForm((showForm) => !showForm);
  }

  function onNewToyFormSubmit(newToyObject) {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToyObject)
    })
      .then(r => r.json())
      .then(newToy => {
        setToys([...toys, newToy])
      })
  }

  function onDonateClick(id) {
   fetch(API_URL+ "/" + id, {
     method: "DELETE"
   })

   const afterDeleteToyArray = toys.filter(toy => {
     return toy.id !== id
   })

   setToys(afterDeleteToyArray)
  }

  function onLikesClick(id, likes) {
    fetch(API_URL + "/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: parseInt(likes + 1, 10)
      })
    }) 
      .then(r => r.json())
      .then(updatedToy => {
        // console.log(updatedToy.id)
        const afterLikesToyArray = toys.map(toy => {
          return toy.id === updatedToy.id ?  {...toy, likes: updatedToy.likes} : toy
        })

        setToys(afterLikesToyArray)
      })
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToyFormSubmit={onNewToyFormSubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleAddToyClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDonateClick={onDonateClick} onLikesClick={onLikesClick} />
    </>
  );
}

export default App;
