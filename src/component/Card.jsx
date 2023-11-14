import React from "react";
import styled from "styled-components";

import ChangeColorGenre from "../component/ChangeColorGenre";
// lazy load
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Card({ short_description, image, genre, title }) {
  return (
    <CardMain className="card flex flex-col w-full h-full">
      <LazyLoadImage
        src={image}
        alt="short_description "
        className="rounded-md w-screen"
        effect="blur"
      />
      <h1 className="text-white my-9 text-xl capitalize">{title}</h1>
      <div className="discription">
        <p className="mb-5 " style={{ color: "rgb(204, 204, 204)" }}>
          {short_description.split(" ").slice(0, 10).join(" ")}
        </p>
        <ChangeColorGenre genres={genre.split(" ")} />
      </div>
    </CardMain>
  );
}

export default Card;

const CardMain = styled.section`
  scale: 0.95;
  transition: all 0.3s;
  &:hover {
    scale: 1;
  }
`;
