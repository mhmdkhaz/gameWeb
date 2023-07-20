// spinner
import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";

function Loader() {
  return (
    <LoaderDiv className="fixed left-0 top-0 w-full h-full flex justify-center items-center">
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderDiv>
  );
}

export default Loader;

const LoaderDiv = styled.div`
  background-color: #2b2b31;
`;
