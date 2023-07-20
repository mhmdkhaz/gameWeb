import React, { Fragment, useState } from "react";
import { useParams, Link } from "react-router-dom";
import UseFetchGet from "../hooks/UseGetData";
import Loader from "../component/Loader";
import ChangeColorGenre from "../component/ChangeColorGenre";
import GameYouMayLike from "../component/GameYouMayLike";

import { BsCloudDownload } from "react-icons/bs";
import Error from "./Error";

function DetailsCard() {
  const { id } = useParams();
  const [data, isLoading] = UseFetchGet(
    "https://free-to-play-games-database.p.rapidapi.com/api/game",
    id
  );

  console.log(id);

  const [letngthWords, setLengthWords] = useState(80);
  const [StateLengt, setStateLength] = useState(true);

  const handleLengthWords = () => {
    setStateLength(!StateLengt);
    StateLengt ? setLengthWords(data.description.length) : setLengthWords(80);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <Error />;
  }

  return (
    <div className="py-36 backgroundDark ">
      <section className="flex justify-center">
        <section style={{ width: "90%" }}>
          <div className="grid lg:grid-cols-12 sm:grid-cols-1 justify-center items-start gap-4 text-white">
            <div className="sideLeft sm:col-span-1 lg:col-span-4 ">
              <h1 className="text-2xl capitalize">{data.title}</h1>
              <p className="text-[#ffffffcc] my-5">{data.short_description}</p>
              <img src={data.thumbnail} alt="" className="w-full" />
            </div>
            <div className="rightSide sm:col-span-1 lg:col-span-8 relative">
              <h1 className="capitalize text-3xl">about the game</h1>
              <p>
                {data.description.split(" ").slice(0, letngthWords).join(" ")}{" "}
                <span onClick={handleLengthWords}>
                  ...{StateLengt ? "read more" : "real less"}
                </span>
              </p>
              <p className="capitalize text-xl my-1">
                developer:
                <strong className="text-[#49c628]"> {data.developer}</strong>
              </p>
              <p className="capitalize text-xl my-1">
                Platform:
                <strong className="text-[#49c628]"> {data.platform}</strong>
              </p>
              <p className="capitalize text-xl my-1">
                Publisher:
                <strong className="text-[#49c628]"> {data.publisher}</strong>
              </p>
              <p className="capitalize text-xl mt-1 mb-6">
                release date:
                <strong className="text-[#49c628]"> {data.release_date}</strong>
              </p>
              <ChangeColorGenre genres={data.genre.split(" ")} />
              <BsCloudDownload className="absolute right-0 bg-[#49c628] rounded-full text-7xl p-4 text-white " />
            </div>
          </div>
          {/* Minimum System Requirements */}
          <div>
            <h1 className="text-2xl my-4 capitalize text-white">
              Minimum System Requirements.
              {Object.keys(data.minimum_system_requirements).map(
                (key, index) => {
                  return (
                    <p className="capitalize text-xl my-1" key={index}>
                      {key}:
                      <strong className="text-[#49c628]">
                        {" "}
                        {data.minimum_system_requirements[key]}
                      </strong>
                    </p>
                  );
                }
              )}
            </h1>
          </div>
          {/* Screenshots */}
          <div className="flex flex-wrap justify-center gap-4 my-8">
            {data.screenshots.map((itemImg) => {
              return (
                <img
                  src={itemImg.image}
                  alt=""
                  className="w-72"
                  key={itemImg.id}
                />
              );
            })}
          </div>
          {/* GameYouMayLike */}
          <GameYouMayLike />
        </section>
      </section>
    </div>
  );
}

export default DetailsCard;
