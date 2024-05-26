import { useEffect, useState } from "react";
import "./App.css";
import { TestingService } from "./services/testing.service";

function App() {
  const [morty, setMorty] = useState({});
  const fetchMorty = async () => {
    const { data } = await TestingService();
    setMorty(data);
  };
  useEffect(() => {
    try {
      fetchMorty();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <div className="App">{JSON.stringify(morty)}</div>
    </>
  );
}

export default App;
