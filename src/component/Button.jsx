import styled from "styled-components";

function Button({ children }) {
  return (
    <ButtonGreen className="py-3 px-9 rounded-md text-lg outline-none capitalize">
      {children}
    </ButtonGreen>
  );
}

export default Button;

const ButtonGreen = styled.button`
  color: rgb(255, 255, 255);
  box-shadow: rgba(73, 198, 40, 0.65) 0px 4px 20px 0px;
  background-image: linear-gradient(
    135deg,
    rgb(112, 245, 112) 10%,
    rgb(73, 198, 40) 100%
  );
`;
