import React from "react";

function AnimeCard({ anime }) {
  return (
    <div className="card-container">
      <a className="container-link" href={anime.url}>
        <img src={anime.images.jpg.image_url} alt="anime image" />
        <h3>{anime.title} </h3>
      </a>
    </div>
  );
}

export default AnimeCard;
