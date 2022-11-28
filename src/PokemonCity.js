import React, { useState } from "react";

function PokemonCity() {
    const [city, setCity] = useState("");
    const updateCity = (event) => {
        setCity(event.target.value);
        console.log(event);
    };

  return (
      <div>
          <input type="text" placeholder="city" value={city} onChange={updateCity}  />
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;