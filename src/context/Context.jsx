import { createContext, useState, useEffect } from "react";

export const Context = createContext();
export const ContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const [animeData, setAnimeData] = useState([]);

  const animeListApi = async (e) => {
    const apiUrl = `https://api.jikan.moe/v4/anime?q=${search}&sfw`;
    const apiResponse = await fetch(apiUrl);
    const data = await apiResponse.json();
    setAnimeData(data.data);
    console.log(data.data);
  };

  const animelist = async (e) => {
    const apiUrl = await fetch(
      `https://api.jikan.moe/v4/anime?q=${e}&sfw`
    ).then((res) => res.json());
    setAnimeData(apiUrl.data);
  };

  const searchtAnime = (e) => {
    e.preventDefault();
    animelist(search);
  };

  useEffect(() => {
    animeListApi();
  }, []);

  return (
    <Context.Provider
      value={{
        setSearch,
        search,
        animeData,
        searchtAnime,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
