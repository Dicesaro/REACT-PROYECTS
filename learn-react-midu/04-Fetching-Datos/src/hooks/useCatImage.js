import { useState, useEffect } from "react";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  // Para recuperar la imagen
  useEffect(() => {
    if (!fact) return;

    const threeFirstWord = fact.split(" ", 3).join(" "); // .split(" ").slice(0, 3).join(" ")
    console.log(threeFirstWord);

    fetch(
      `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`
    ).then((response) => {
      const { url } = response;
      setImageUrl(url);
      console.log(response);
    });
  }, [fact]);

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` };
}
