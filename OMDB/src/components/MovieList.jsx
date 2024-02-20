import React from "react";
import { BsPlayBtnFill } from "react-icons/bs";
import { NavLink, useParams } from "react-router-dom";

const MovieList = ({ movies, idYear, id }) => {
  const { idMovie } = useParams();
  console.log("id=",idMovie);
  console.log("movies list=",movies);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center mx-auto my-0 container mt-5">
      {movies ? (
        movies.map((movie, i) => (
          <div key={i} className="bg-gray-500 relative">
            <NavLink
              to={
                idYear
                  ? `/search/${id}/year/${idYear}/id/${movie.imdbID}`
                  : `/search/${id ? id : "naruto"}/id/${movie.imdbID}`
              }
              className="absolute bg-black h-full w-full opacity-0 hover:opacity-90 duration-500 flex justify-center items-center"
            >
              <BsPlayBtnFill className=" text-3xl" />
            </NavLink>
            <img src={movie.Poster} alt="" className="w-full aspect-[9/14]" />
          </div>
        ))
      ) : (
        <h1 className="text-5xl">No results...</h1>
      )}      
    </div>
  );
};

export default MovieList;
