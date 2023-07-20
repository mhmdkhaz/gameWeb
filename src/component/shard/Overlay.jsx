import React from "react";
import styled from "styled-components";

function Overlay(props) {
  return (
    <Ovelay
      style={{ backgroundColor: props.backgroundColor, zIndex: props.zIndex }}
      onClick={props.onClose}
    ></Ovelay>
  );
}

export default Overlay;

const Ovelay = styled.span`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  z-index: ${(props) => props.zIndex};
  background-color: ${(props) => props.backgroundColor};
`;
