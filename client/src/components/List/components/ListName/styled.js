import styled from "styled-components";

export const StyledInput = styled.input`
  background: white;
  border: 0px solid;
  display: block;
  width: 100%;
  outline: 0px solid;
  font-size: 20px;
  padding: 20px;

  &:focus {
    outline: 2px solid blue;
  }
`;

const Wrapper = styled.div`
  border: 2px solid lightsalmon;
  cursor: pointer;
`;

export default Wrapper;
