import "./App.css";
import { useFlags } from "./hooks/useFlags.js";
export function App() {
  const { country } = useFlags();

  return (
    <>
      <h1>Paises del mundo</h1>
      <section className="cont_countrys">
        {country?.map((country) => (
          <div className="info_countrys" key={country.name.common}>
            <h2>{country.name.common}</h2>
            <img src={country.flags.png} alt={country.name.common} />
          </div>
        ))}
      </section>
    </>
  );
}
