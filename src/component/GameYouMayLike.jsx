import { Link, useNavigate } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";
import UseFetchGet from "../hooks/UseGetData";

function GameYouMayLike() {
  //   const navigate = useNavigate();

  const [data, isLoading, error] = UseFetchGet(
    "https://free-to-play-games-database.p.rapidapi.com/api/games",
    "?sort-by=release-date"
  );
  const [randomData, setRandomData] = useState([]);

  const getRandomData = () => {
    if (data) {
      const copy = [...data];
      const randomResult = [];
      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * copy.length);
        const randomItem = copy.splice(randomIndex, 1)[0];
        randomResult.push(randomItem);
      }
      setRandomData(randomResult);
    }
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    getRandomData();
  }, [data]);

  return (
    <>
      <h1 className="capitalize text-white text-center text-3xl my-8">
        game you may like
      </h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center justify-items-center items-center gap-4">
        {Array.isArray(randomData) &&
          randomData.map((game) => (
            <Link to={`/${game.id}`} key={game.id}>
              <Card
                id={game.id}
                short_description={game.short_description}
                image={game.thumbnail}
                genre={game.genre}
                title={game.title}
              />
            </Link>
          ))}
      </div>
    </>
  );
}

export default GameYouMayLike;
