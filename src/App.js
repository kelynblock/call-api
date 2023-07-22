// App.js
import React, { useState, useEffect } from "react";
import { getAllStarships } from "./services/sw-api";
import StarShipCardz from "./components/StarShipCardz";

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const starshipsData = await getAllStarships();
        setStarships(starshipsData);
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    };

    fetchStarships();
  }, []);

  return (
    <div>
      {starships.map((starship) => (
        <StarShipCardz key={starship.name} name={starship.name} />
      ))}
    </div>
  );
}

export default App;
