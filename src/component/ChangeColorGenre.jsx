import React from "react";
import styled from "styled-components";

function ChangeColorGenre({ genres }) {
  const dataGenre = [...genres];

  return (
    <CardGameColor className={`p-2 rounded text-white ${dataGenre.join("-")}`}>
      {genres}
    </CardGameColor>
  );
}

export default ChangeColorGenre;

const CardGameColor = styled.span`
  &.Shooter {
    background-color: rgb(208, 84, 14);
  }
  &.MMOARPG {
    background-color: rgb(7, 176, 86);
  }
  &.ARPG {
    background-color: rgb(120, 12, 12);
  }
  &.Strategy {
    background-color: rgb(255, 0, 243);
  }
  &.Fighting {
    background-color: rgb(171, 22, 170);
  }
  &.Battle-Royale {
    background-color: rgb(171, 22, 170);
  }
  &.Action-RPG {
    background-color: rgb(208, 84, 14);
  }
  &.MMORPG {
    background: rgb(18, 106, 123);
  }
  &.MOBA {
    background: rgb(51, 51, 51);
  }
  &.Sports {
    background: rgb(51, 51, 51);
  }
`;
