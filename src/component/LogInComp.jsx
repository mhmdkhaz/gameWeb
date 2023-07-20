import React, { Fragment, useState, useContext } from "react";
import styled from "styled-components";

// componenet
import InputForm from "../component/shard/Input";
import Button from "../component/Button";

// shard
import Overlay from "./shard/Overlay";

// hooks
import MyContext from "../hooks/MyContext";

// react icons
import { BiUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Rejecter = ({ onClose, translate }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { value, setValue } = useContext(MyContext);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const InputsData = [
    {
      id: 1,
      label: "",
      name: "email",
      type: "email",
      placeholder: "Email",
      ErrorMessage: "It should be a valid email address!",
      icon: <AiOutlineMail />,
      required: false,
    },
    {
      id: 2,
      label: "",
      type: showPassword ? "text" : "password",
      placeholder: "Password",
      name: "password",
      ErrorMessage: "1 letter, 1 number and 1 special character!",
      icon: <RiLockPasswordLine />,
      required: false,
    },
  ];

  return (
    <Fragment>
      <LogInDiv className="">
        <div className="flex justify-between text-white border-b-2 border-solid border-[#B0B3B9] py-4 px-8 ">
          <h2 className="capitalize">Login</h2>
          <AiOutlineClose onClick={onClose} />
        </div>
        <div className="p-5">
          <h1 className="text-white text-3xl text-center my-5 capitalize">
            Login
          </h1>
          <p className="text-[#B0B3B9] text-[14px] mb-[20px]">
            have an account?
            <span
              onClick={() => setValue(!translate)}
              className="text-[#49C628] ml-[5px] font-bold cursor-pointer md:text-[14px] text-[12px]"
            >
              Regester!
            </span>
          </p>
          <form className="w-full">
            {InputsData.map((item, key) => (
              <InputForm
                key={key}
                labelText={item.label}
                id={item.id}
                name={item.name}
                onChange={handleChange}
                type={item.type}
                placeholder={item.placeholder}
                required={item.required}
                ErrorMessage={item.ErrorMessage}
                icon={item.icon}
                isPassword={showPassword}
                onClick={handleShowPassword}
              />
            ))}
            <div className="flex justify-center items-center mt-[50px]">
              <Button> Login </Button>
            </div>
          </form>
        </div>
      </LogInDiv>
      <div onClick={onClose}>
        <Overlay backgroundColor="rgba(51, 51, 51, 0.643)" zIndex="200" />
      </div>
    </Fragment>
  );
};
export default Rejecter;

const LogInDiv = styled.div`
  position: fixed;
  top: -10%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 25vw;
  height: auto;
  border-radius: 10px;
  z-index: 500;
  backdrop-filter: blur(50px);
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 20px 0px;
  animation: 0.1s linear 0s 1 normal none running YFHiY;
  @media (max-width: 1024px) {
    width: 50vw;
  }
  @media (max-width: 640px) {
    width: 80vw;
  }
`;
