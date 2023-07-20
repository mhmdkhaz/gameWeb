import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";

function Pricing() {
  return (
    <section className="backgroundDark flex flex-col justify-center items-center relative py-36 h-screen">
      <h1 className="capitalize text-white text-3xl my-5">Pricing Plan.</h1>
      <div className="cardPricing flex flex-wrap flex-row justify-center items-center gap-4">
        <CardPricing className="pricing flex flex-col justify-center items-center px-5">
          <h1 className="capitalize text-white text-center text-5xl">
            STARTER
          </h1>
          <Div className="mt-5 w-full text-center">
            <p
              className="text-5xl font-sans"
              style={{ color: "rgb(73, 198, 40)" }}
            >
              0$
              <span className="sc-cCjUiG fqlpFJ text-xl text-white">
                /per month
              </span>
            </p>
          </Div>
          <ul className="py-3 w-full mb-10">
            <li className="flex justify-start items-center gap-4 mb-4 m-0 text-white">
              <i style={{ color: "rgb(73, 198, 40)" }}>
                <AiOutlineCheck />
              </i>
              Download 5 Games
            </li>
            <li className="flex justify-start items-center gap-4 mb-4 m-0 text-white">
              <i style={{ color: "rgb(73, 198, 40)" }}>
                <AiOutlineCheck />
              </i>
              Lorem ipsum dolor sit amet.
            </li>
            <li className="flex justify-start items-center gap-4 mb-4 m-0 text-white">
              <i style={{ color: "rgb(73, 198, 40)" }}>
                <AiOutlineCheck />
              </i>
              Lorem ipsum dolor sit amet.
            </li>
            <li className="flex justify-start items-center gap-4 mb-4 m-0 text-white">
              <i style={{ color: "rgb(73, 198, 40)" }}>
                <AiOutlineCheck />
              </i>
              Lorem ipsum dolor sit amet.
            </li>
          </ul>
          <BtnStarted className="button">get started</BtnStarted>
        </CardPricing>
        <CardPricing className="pricing flex flex-col justify-center items-center px-5">
          <h1 className="capitalize text-white text-center text-5xl">
            STARTER
          </h1>
          <Div className="mt-5 w-full text-center">
            <p
              className="text-5xl font-sans"
              style={{ color: "rgb(73, 198, 40)" }}
            >
              29$
              <span className="sc-cCjUiG fqlpFJ text-xl text-white">
                /per month
              </span>
            </p>
          </Div>
          <ul className="py-3 w-full mb-10">
            <li className="flex justify-start items-center gap-4 mb-4 m-0 text-white">
              <i style={{ color: "rgb(73, 198, 40)" }}>
                <AiOutlineCheck />
              </i>
              Download 5 Games
            </li>
            <li className="flex justify-start items-center gap-4 mb-4 m-0 text-white">
              <i style={{ color: "rgb(73, 198, 40)" }}>
                <AiOutlineCheck />
              </i>
              Lorem ipsum dolor sit amet.
            </li>
            <li className="flex justify-start items-center gap-4 mb-4 m-0 text-white">
              <i style={{ color: "rgb(73, 198, 40)" }}>
                <AiOutlineCheck />
              </i>
              Lorem ipsum dolor sit amet.
            </li>
            <li className="flex justify-start items-center gap-4 mb-4 m-0 text-white">
              <i style={{ color: "rgb(73, 198, 40)" }}>
                <AiOutlineCheck />
              </i>
              Lorem ipsum dolor sit amet.
            </li>
          </ul>
          <BtnStarted className="button">get started</BtnStarted>
        </CardPricing>
        <CardPricing className="pricing flex flex-col justify-center items-center px-5">
          <h1 className="capitalize text-white text-center text-5xl">
            STARTER
          </h1>
          <Div className="mt-5 w-full text-center">
            <p
              className="text-5xl font-sans"
              style={{ color: "rgb(73, 198, 40)" }}
            >
              59$
              <span className="sc-cCjUiG fqlpFJ text-xl text-white">
                /per month
              </span>
            </p>
          </Div>
          <ul className="py-3 w-full mb-10">
            <li className="flex justify-start items-center gap-4 mb-4 m-0 text-white">
              <i style={{ color: "rgb(73, 198, 40)" }}>
                <AiOutlineCheck />
              </i>
              Download 5 Games
            </li>
            <li className="flex justify-start items-center gap-4 mb-4 m-0 text-white">
              <i style={{ color: "rgb(73, 198, 40)" }}>
                <AiOutlineCheck />
              </i>
              Lorem ipsum dolor sit amet.
            </li>
            <li className="flex justify-start items-center gap-4 mb-4 m-0 text-white">
              <i style={{ color: "rgb(73, 198, 40)" }}>
                <AiOutlineCheck />
              </i>
              Lorem ipsum dolor sit amet.
            </li>
            <li className="flex justify-start items-center gap-4 mb-4 m-0 text-white">
              <i style={{ color: "rgb(73, 198, 40)" }}>
                <AiOutlineCheck />
              </i>
              Lorem ipsum dolor sit amet.
            </li>
          </ul>
          <BtnStarted className="button">get started</BtnStarted>
        </CardPricing>
      </div>
    </section>
  );
}

export default Pricing;

const CardPricing = styled.div`
  width: 300px;
  height: auto;
  border: 2px solid;
  border-style: solid;
  border-color: rgb(73, 198, 40) transparent transparent;
  border-image: initial;
  padding: 20px;
  border-radius: 5px;
  backdrop-filter: blur(20px);
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 20px 0px;
  cursor: pointer;
  transition: all 0.5s ease-in-out 0s;
  overflow: hidden;
  &:hover {
    border: 2px solid rgb(73, 198, 40);
    .button {
      border: 2px solid rgb(73, 198, 40);
    }
  }
`;

const Div = styled.div`
  position: relative;
  padding-bottom: 30px;
  &:after {
    content: "";
    position: absolute;
    content: "";
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 3px;
    border-radius: 10px;
    background-color: rgb(73, 198, 40);
  }
`;

const BtnStarted = styled.button`
  display: block;
  margin: 0px auto;
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 8px 15px;
  color: rgb(255, 255, 255);
  border-radius: 5px;
  transition: all 0.5s ease-in-out 0s;
`;
