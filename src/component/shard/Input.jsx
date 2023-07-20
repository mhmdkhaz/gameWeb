import React, { Fragment } from "react";
import styled from "styled-components";

//
// import { BiUser } from "react-icons/bi";

const InputForm = ({
  onClick,
  isPassword,
  labelText,
  name,
  id,
  value,
  type,
  icon,
  onChange,
  placeholder,
  required,
  ErrorMessage,
}) => {
  return (
    <Fragment>
      <div className="md:mb-[25px] mb-[20px]">
        <label className="text-[16px] text-[#737373]" htmlFor={id}>
          {labelText}
        </label>
        <div className="relative">
          <input
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="w-full border-b-[2px] bg-transparent outline-none text-white border-[#49C628] py-[8px] pl-[40px] pr-[10px] "
          />
          <div className="absolute top-2/4 left-[10px] translate-y-[-50%] text-[#B0B3B9] text-xl">
            {icon}
          </div>
          {name === "password" && (
            <Icon onClick={onClick} className="right-[10px]">
              {isPassword ? (
                <ion-icon name="eye-off-outline"></ion-icon>
              ) : (
                <ion-icon name="eye-outline"></ion-icon>
              )}
            </Icon>
          )}
          <span className="error absolute">{ErrorMessage}</span>
        </div>
      </div>

      <style>
        {`
            span.error{
                color : #ed4242;
                font-size: 13px;
                display: none;
                {/* bg-[#E8F0FE] */}
            }
            @media(max-width : 768px){
              span.error{
                font-size: 12px;
              } 
            }
            input:invalid  {
                border-bottom: 2px solid #ed4242;
            }
            input:invalid ~ span {
                display: block;
            }
          `}
      </style>
    </Fragment>
  );
};

export default InputForm;

const Icon = styled.span`
  position: absolute;
  top: 55%;
  transform: translateY(-50%);
  color: #737377;
  font-size: 20px;
  cursor: pointer;
  &:focus {
    background: red;
  }
`;
