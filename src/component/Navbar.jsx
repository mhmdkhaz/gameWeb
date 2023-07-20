import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

// icons
import { AiOutlineDollar } from "react-icons/ai";
import { PiGameControllerFill } from "react-icons/pi";
import { BiErrorCircle } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";

import { IoMdClose } from "react-icons/io";
import { BsList } from "react-icons/bs";

// components
import Button from "../component/Button";
import Rejecter from "../pages/Rejester";

// data to navbar component
const navbarData = [
  {
    to: "/",
    icon: <IoHomeOutline />,
    title: "Home",
  },
  {
    to: "error",
    icon: <BiErrorCircle />,
    title: "404",
  },
  {
    to: "gamer",
    icon: <PiGameControllerFill />,
    title: "Gamer",
  },
  {
    to: "pricing",
    icon: <AiOutlineDollar />,
    title: "pricing",
  },
];

function RootLayout() {
  // state to close and open navigation
  const [closeOpen, setCloseOpeen] = useState(false);
  // open login
  const [openLogin, setOpenLogin] = useState(false);
  const handleCloseLogin = () => setOpenLogin(false);

  return (
    <div>
      <NavbarLink
        className={`from-transparent fixed w-full z-5 ${
          closeOpen ? "lg:left-[-100%] left-0 " : "lg:left-0 left-[-100%]"
        }`}
      >
        <div className="max-w-screen-xl flex flex-row lg:flex-row-reverse flex-wrap items-center justify-between h-full mx-auto mt-10 lg:mt-0 ">
          <div className="BtnLog ">
            <div onClick={() => setOpenLogin(true)}>
              <Button>login</Button>
            </div>
          </div>
          <div className="h-full lg:w-auto w-full">
            <ul className="font-medium flex lg:flex-row h-full flex-col">
              {navbarData.map((item, index) => (
                <ListNav
                  className="w flex justify-start lg:justify-center items-center relative text-white mx-0 lg:mx-4"
                  key={index}
                >
                  <NavLink to={item.to}>
                    <span className="line absolute bottom-0 left-0 w-0 h-1 ease-in duration-300 "></span>
                    <StyledIcon>{item.icon}</StyledIcon>
                    {item.title}
                  </NavLink>
                </ListNav>
              ))}
            </ul>
          </div>
        </div>
      </NavbarLink>
      {/* add button to close and open sidebar in mobile */}
      <div className="text-white z-50">
        <CloseButton
          className="fixed bottom-5 right-5 z-[9999] lg:hidden block "
          onClick={() => setCloseOpeen(!closeOpen)}
        >
          {closeOpen ? <IoMdClose /> : <BsList />}
        </CloseButton>
      </div>
      {/* singup and login */}
      <Rejecter onClose={handleCloseLogin} visibale={openLogin} />
      <Outlet />
    </div>
  );
}

export default RootLayout;

const NavbarLink = styled.nav`
  width: 100%;
  height: 80px;
  backdrop-filter: blur(50px) !important;
  -webkit-backdrop-filter: blur(50px) !important;
  -moz-backdrop-filter: blur(50px) !important;
  -ms-backdrop-filter: blur(50px) !important;
  -o-backdrop-filter: blur(50px) !important;
  z-index: 1001;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 25px 0px;
  transition: all 0.3s ease-in-out 0s;
  @media (max-width: 1024px) {
    width: 30vw;
    height: 100vh;
    ul {
      display: flex;
      align-items: start;
      justify-content: flex-start;
    }
  }
  @media (max-width: 768px) {
    width: 40vw;
  }
  @media (max-width: 640px) {
    width: 80vw;
  }
  .BtnLog {
    @media (max-width: 1024px) {
      padding: 0 12px;
      border-bottom: 3px solid rgb(73, 198, 40);
      padding: 10px 10px 30px;
      width: 100%;
    }
  }
`;

const ListNav = styled.div`
  min-width: 140px;
  transition: all 0.3s;
  &:hover {
    color: red;
    color: rgb(73, 198, 40);
  }
  &:hover {
    .line {
      width: 100%;
      background-color: rgb(73, 198, 40);
    }
  }
  .active {
    color: rgb(73, 198, 40);
  }
  @media (max-width: 1024px) {
    padding: 30px 10px;
  }
`;
const StyledIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

// button close and open sidbar
const CloseButton = styled.button`
  padding: 5px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid rgb(255, 255, 255);
  backdrop-filter: blur(20px);
  color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 28px;
  cursor: pointer;
  transition: all 0.4s ease 0s;
  opacity: 0;
  &:hover {
    box-shadow: rgba(73, 198, 40, 0.65) 0px 4px 20px 0px;
  }
  @media (max-width: 1024px) {
    opacity: 1;
  }
`;
