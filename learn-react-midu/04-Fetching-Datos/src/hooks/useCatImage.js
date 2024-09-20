import { useState, useEffect } from "react";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;
    const threeFirstWords = fact.split(" ").slice(0, 3).join(" ");
    console.log(threeFirstWords);

    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=white`
    ).then((response) => {
      setImageUrl(response.url);
    });
  }, [fact]);

  return { imageUrl };
}
