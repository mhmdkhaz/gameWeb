import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UseFetchGet from "../hooks/UseGetData";
import Card from "../component/Card";
import GamesPlatform from "../component/GamesPlatform";
import Loader from "../component/Loader";
import Overlay from "../component/shard/Overlay";
import { Link } from "react-router-dom";

const BgImages = styled.div`
  background: url("images/bg-games.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  position: relative;
`;

function Home() {
  const [datGame, isLoading] = UseFetchGet(
    "https://free-to-play-games-database.p.rapidapi.com/api/games"
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <header>
      <BgImages>
        <Overlay backgroundColor="rgba(0, 0, 0, 0.8)" zIndex="1" />
        <section className="flex flex-row justify-center relative lg:py-36 py-5">
          <div style={{ width: "90%", zIndex: "100" }}>
            <h1 className="capitalize text-center text-3xl text-white font-bold my-8">
              top games.
            </h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center justify-items-center items-center gap-4">
              {Array.isArray(datGame) &&
                datGame.slice(0, 8).map((game) => (
                  <Link to={game.id.toString()} key={game.id}>
                    <Card
                      key={game.id}
                      id={game.id}
                      short_description={game.short_description}
                      image={game.thumbnail}
                      genre={game.genre}
                      title={game.title}
                    />
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </BgImages>
      <GamesPlatform
        text="Games by platform."
        startLength={20}
        endLength={32}
        stopShow={32}
      />
    </header>
  );
}

export default Home;
