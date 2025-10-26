import React, { useEffect } from "react";
import api from "./api";

function App() {
  useEffect(() => {
    async function fetchData() {
      let res = await api.getMovie({ s: "social" });
      console.log(res.Search);
    }
    fetchData()
  }, []);
  
  return <div>App</div>;
}

export default App;
