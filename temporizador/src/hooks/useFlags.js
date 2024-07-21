import { useState, useEffect } from "react";

const API_FLAGS = "https://restcountries.com/v3.1/all?fields=name,flags";

export function useFlags() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch(API_FLAGS)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  return country;
}
