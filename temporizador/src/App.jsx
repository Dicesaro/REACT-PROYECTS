import "./App.css";
import { useFlags } from "./hooks/useFlags.js";
export function App() {
  const { country } = useFlags();

  return (
    <>
      <h1>Paises del mundo</h1>
      <section className="cont_countrys">
        {country?.map((country) => (
          <div className="info_countrys" key={country.name}>
            <img src={country.flags} alt={country.name} />
            <h2>{country.name}</h2>
          </div>
        ))}
      </section>
    </>
  );
}
