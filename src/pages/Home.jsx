import React, { useEffect, useState } from "react";
import api from "../api";
import Card from "../components/Card";

function Home() {
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalpages] = useState(0);

  useEffect(() => {
    async function fetchData() {
      let res = await api.getMovie({ s: "The a", page: page });
      console.log(res.Search);
      setMovieData(res?.Search);
      setTotalpages(Math.ceil(res.totalResults / 10));
    }
    fetchData();
  }, [page]);

  console.log("movie data: ", movieData);

  return (
    <>
      <div className="">
        {movieData.length > 0 ? (
          movieData.map((item, index) => <Card movieData={item} />)
        ) : (
          <p>no movies found!</p>
        )}
      </div>

      <div>
        <button
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
        >
          prev
        </button>
        <button onClick={() => setPage(2)}>{page}</button>
        <button
          onClick={() => {
            if (page < totalPages) setPage(page + 1);
          }}
        >
          next
        </button>
      </div>
    </>
  );
}

export default Home;
