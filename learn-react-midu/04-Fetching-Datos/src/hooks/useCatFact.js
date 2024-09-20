import { useState, useEffect } from "react";
import { getRandomFact } from "../services/facts";

export const useCatFact = () => {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getRandomFact(setFact).then((newFact) => setFact(newFact));
  };

  useEffect(getRandomFact, []);

  return { fact, refreshFact };
};
