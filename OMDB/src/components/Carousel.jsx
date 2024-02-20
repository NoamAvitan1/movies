import React from "react";
import { Carousel as CarouselFlowBite } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
const Carousel = ({idYear, id}) => {
  const navigate = useNavigate();
  return (
    <div className="h-[600px] w-full aspect-[16/6]">
      {/* h-56 sm:h-64 xl:h-80 2xl:h-96  */}
      <CarouselFlowBite slideInterval={5000}>
        <Link
          to={
            idYear
              ? `/search/${id}/year/${idYear}/id/tt9335498`
              : `/search/${id}/id/tt9335498`
          }
        >
          <img
            className="h-[750px] object-fill aspect-[16/6] w-full"
            src="https://cutewallpaper.org/21/demon-slayer-zenitsu-wallpaper/Hd-Demon-Slayer-Background-3840x1080-Elkgroveses.com.jpg"
            alt="..."
          />
        </Link>
        <Link
          to={
            idYear
              ? `/search/${id}/year/${idYear}/id/tt0988824`
              : `/search/${id}/id/tt0988824`
          }
        >
          <img
            className="h-[700px] aspect-[16/6] w-full"
            src="https://wallpapercave.com/wp/wp4657480.jpg"
            alt="..."
          />
        </Link>
        <Link
          to={
            idYear
              ? `/search/${id}/year/${idYear}/id/tt7941892`
              : `/search/${id}/id/tt7941892`
          }
        >
          <img
            className="h-[950px] aspect-[16/6] w-full"
            src="https://store-images.s-microsoft.com/image/apps.18464.63877934742645278.665d3378-1d8e-4341-a7b2-14afc3a69269.87a74448-9330-4f93-89e0-eb23be82251a?mode=scale&q=90&h=1080&w=1920"
            alt="..."
          />
        </Link>
        <Link
          to={
            idYear
              ? `/search/${id}/year/${idYear}/id/tt3837246`
              : `/search/${id}/id/tt3837246`
          }
        >
          <img
            className="h-[700px] aspect-[16/6] w-full"
            src="https://images.saymedia-content.com/.image/t_share/MTc2MjQ4NTM5NjgzNDMyMzI3/15-anime-that-will-remind-you-of-ansatsu-kyoushitsu-assassination-classroom.jpg"
            alt="..."
          />
        </Link>
        <Link
          to={
            idYear
              ? `/search/${id}/year/${idYear}/id/tt2098220`
              : `/search/${id}/id/tt2098220`
          }
        >
          <img
            className="h-[700px] aspect-[16/6] w-full"
            src="https://staticg.sportskeeda.com/editor/2022/10/d8581-16663316932144-1920.jpg"
            alt="..."
          />
        </Link>
      </CarouselFlowBite>
    </div>
  );
};

export default Carousel;
