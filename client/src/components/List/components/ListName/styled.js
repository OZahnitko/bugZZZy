import styled from "styled-components";

export const StyledInput = styled.input`
  background: ${(props) => (props.disabled ? "inherit" : "white")};
  border: 2px solid #eee;
  border-radius: 10px;
  box-sizing: border-box;
  display: block;
  width: 100%;
  outline: 0px solid;
  font-size: 20px;
  padding: 10px;
  transition: border-radius 0.001s;

  cursor: pointer;

  &:focus {
    border: 2px solid blue;
    cursor: text;
  }
`;

const Wrapper = styled.div`
  cursor: pointer;
  margin: 10px;
`;

export default Wrapper;
