import React, { useState } from "react";
import styled from "styled-components";

// components
import Card from "../component/Card";
import Button from "./Button";
import Loader from "./Loader";
import UseFetchGet from "../hooks/UseGetData";
import { Link } from "react-router-dom";

function GamesPlatform({ text, startLength, endLength, stopShow }) {
  const [filterElement, setFilterElement] = useState("ALL");
  const [lengthCard, setLengthCard] = useState(endLength);
  const [data, isLoading] = UseFetchGet(
    "https://free-to-play-games-database.p.rapidapi.com/api/games"
  );

  const CheckFilter = () => {
    if (filterElement === "ALL") {
      return data;
    } else if (Array.isArray(data)) {
      return data.filter((game) => game.genre === filterElement);
    } else {
      return [];
    }
  };

  const handleFilter = (element) => {
    setFilterElement(element);
  };

  const plusLengthCard = () => {
    setLengthCard(lengthCard + 10);
  };

  const minseLengthCard = () => {
    setLengthCard(lengthCard - 10);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="backgroundDark flex justify-center">
      <div style={{ width: "90%" }} className="lg:py-36 py-5 px-4 z-50">
        <h1 className="text-center text-3xl text-white">{text}</h1>
        <ul className="filterLi capitalize flex sm:flex-row flex-col justify-center gap-4 my-8 text-center">
          <ListFilter onClick={() => handleFilter("Shooter")}>pc</ListFilter>
          <ListFilter onClick={() => handleFilter("MMORPG")}>
            Browser
          </ListFilter>
          <ListFilter onClick={() => handleFilter("ALL")}>all</ListFilter>
        </ul>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  justify-center justify-items-center items-center  gap-4">
          {Array.isArray(CheckFilter()) &&
            CheckFilter()
              .slice(startLength, lengthCard)
              .map((game) => (
                <Link to={`/${game.id}`} key={game.id}>
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
        <div className="buttons flex flex-wrap justify-center items-center gap-4 my-10">
          <div onClick={plusLengthCard}>
            <Button>show more</Button>
          </div>
          {lengthCard > stopShow ? (
            <div onClick={minseLengthCard}>
              <Button>show less</Button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}

export default GamesPlatform;

const ListFilter = styled.li`
  padding: 10px 30px;
  color: rgb(255, 255, 255);
  border: 2px solid rgba(204, 204, 204, 0.6);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    border: 2px solid rgb(73, 198, 40);
  }
`;
