import "./App.css";
import { useCatImage } from "./hooks/useCatImage.js";
import { useCatFact } from "./hooks/useCatFact.js";

export function App() {
  const { fact, refreshRandomFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshRandomFact();
  };

  return (
    <main>
      <h1>App de Gatos</h1>

      <button onClick={handleClick}>Get new fact</button>
      {fact && <h3>{fact}</h3>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted usin the firstrhee word for ${fact}`}
        />
      )}
    </main>
  );
}
