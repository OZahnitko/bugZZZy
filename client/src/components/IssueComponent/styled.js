import styled from "styled-components";

export const StyledDragHandle = styled.div`
  border: 5px solid red;
  height: 20px;
  width: 20px;
`;

const Wrapper = styled.div`
  border: 2px solid ${(props) => (props.assigned ? "blue" : "red")};
  cursor: pointer;
`;

export default Wrapper;
