import { useState, useEffect } from "react";
import "./App.css";

const NAVIGATION_EVENT = "pushState";

function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(NAVIGATION_EVENT);
  window.dispatchEvent(navigationEvent);
}

function HomePage() {
  return (
    <>
      <h1>Bienvenido a la página de inicio</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
        cupiditate soluta iste incidunt nemo alias unde expedita? Obcaecati
        mollitia non cumque consectetur itaque aut, quasi sapiente beatae
        exercitationem, accusamus odio.
      </p>
      <a href="/about">Nosotros</a>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>Bienvenido a la página de About</h1>
      <div>
        <p>Nosotros somos un equipo...</p>
        <img
          src="https://as2.ftcdn.net/v2/jpg/04/81/88/37/1000_F_481883739_rwKdWQlsZR9Po6yPrjR4ta4vZNPJ6Zlm.jpg"
          alt="image"
        />
      </div>
      <a href="/">Home</a>
    </>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(NAVIGATION_EVENT, onLocationChange);
 
    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange);
    };
  }, []);

  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </main>
  );
}

export default App;
