import React, { useEffect, useState } from "react";
import api from "../api";
import Card from "../components/Card";

function Home() {
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalpages] = useState(0);
  const [keyword, setKeyword] = useState("");

  async function fetchData() {
    if (!keyword) return;

    let res = await api.getMovie({ s: keyword, page });

    console.log(res.Search);
    setMovieData(res?.Search || []);
    setTotalpages(Math.ceil(res.totalResults / 10));
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  console.log("movie data: ", movieData);

  const handleSearch = () => {
    setPage(1)
    fetchData()
  }

  return (
    <>
      <div>
        <input type="text" placeholder="search....." onChange={(e)=>setKeyword(e.target.value)}/>{" "}
        <button onClick={() => {handleSearch()}}>Search</button>
      </div>

      <div className="grid grid-cols-4">
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
