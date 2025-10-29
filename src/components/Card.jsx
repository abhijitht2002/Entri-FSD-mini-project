import React from "react";

function Card({ movieData }) {
  console.log("movies: ", movieData);
  return (
    <div>
      <img src={movieData.Poster} alt="" />
      <h1>{movieData.Title}</h1>
      <p>Type: {movieData.Type}</p>
      <p>Year: {movieData.Year}</p>
    </div>
  );
}

export default Card;
