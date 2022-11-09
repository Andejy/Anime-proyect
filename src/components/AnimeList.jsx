import { useContext } from "react";
import { Context } from "../context/Context";
import AnimeCard from "./AnimeCard";

function AnimeList() {
  const { animeData } = useContext(Context);

  return (
    <div className="anime-list">
      {animeData.map((anime) => {
        return (
          <div className="card-list">
            <div>
              <AnimeCard anime={anime} key={anime.mal_id}></AnimeCard>{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AnimeList;
