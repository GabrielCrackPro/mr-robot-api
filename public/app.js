const API_URLS = {
  characters: "http://localhost:3000/characters",
};
const getData = async (url) => {
  const response = await fetch(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Cross-Origin-Resource-Policy": "cross-origin",
    },
  });
  const data = await response.json();
  return data;
};
window.onload = async () => {
  const characters = await getData(API_URLS.characters);
  console.log(characters);
};
