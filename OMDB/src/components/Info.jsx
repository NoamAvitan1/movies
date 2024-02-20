import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";

const Info = () => {
  const [dataMovie, setDataMovie] = useState(null);
  const { idMovie } = useParams();
  const navigate = useNavigate();

  const apikey = "55a6d6bc";

  const movieApi = async () => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${idMovie}&apikey=${apikey}`
    );
    console.log("dataInfo=", data);
    setDataMovie(data);
  };

  useEffect(() => {
      movieApi();
  }, []);
  return (
    <div>
      {dataMovie === null ? (
        <Loading />
      ) : (
        <div className="info hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row shadow-2xl shadow-indigo-500/50 border border-primary">
            <img
              src={dataMovie.Poster}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{dataMovie.Title}</h1>
              <p className="py-2">{dataMovie.Plot}</p>
              <p className="py-2">Genre: {dataMovie.Genre}</p>
              <p className="py-2">Actors: {dataMovie.Actors}</p>
              <p className="py-2">Year: {dataMovie.Year}</p>
              <button onClick={() => navigate(-1)} className="btn btn-primary">
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
