const api = {
  baseUrl: "https://www.omdbapi.com/?apikey=8d8d854e",
  getMovie: (query) => {
    let queryStr = "&";

    if (query.s) {
      queryStr += `s=${query.s}&`;
    }
    if (query.i) {
      queryStr += `i=${query.i}&`;
    }
    query.t && (queryStr += `t=${query.t}&`);
    query.page && (queryStr += `page=${query.page}&`);
    let url = `${api.baseUrl}${queryStr}`;
    return fetch(url).then((res) => res.json());
  },
};

export default api;
