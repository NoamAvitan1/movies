import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import MovieList from "./MovieList";
import Loading from "./Loading"

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id, idYear } = useParams();
  const location = useLocation();
  
  const defaultHomePage = "naruto";
  const apikey = "55a6d6bc";

  const movieApi = async () => {
    const { data } = await axios.get(
      !idYear
        ? `https://www.omdbapi.com/?s=${id ? id : defaultHomePage}&apikey=${apikey}`
        : `https://www.omdbapi.com/?s=${
            id ? id : defaultHomePage
          }&y=${idYear}&apikey=${apikey}`
    );
    console.log("data=", data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    setIsLoading(true);
    movieApi();
    setIsLoading(false);
  }, [location]);

  return (
    <div>
      {isLoading ? <Loading/> : <MovieList movies={movies} idYear={idYear} id={id} />}
    </div>
  );
};

export default Home;
