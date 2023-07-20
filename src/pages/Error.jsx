import React from "react";
import styled from "styled-components";
import Button from "../component/Button";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="backgroundDark flex flex-col justify-center items-center  relative py-36 w-full h-screen">
      <ClipImg className="text-center opacity-70 capitalize font-black">
        oops!
      </ClipImg>
      <div className="textError flex flex-col items-center">
        <h1 className="text-white text-2xl">404 - PAGE NOT FOUND</h1>
        <p className="text-white my-4 max-w-md text-center">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button>go to homepage</Button>
        </Link>
      </div>
    </section>
  );
}

export default Error;

const ClipImg = styled.h1`
  font-family: "Montserrat", sans-serif;
  background: url("images/bg-games.jpg") no-repeat center center/cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20vw;
`;
