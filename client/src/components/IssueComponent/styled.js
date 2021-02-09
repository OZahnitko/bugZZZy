import styled from "styled-components";

export const StyledDragHandle = styled.div`
  border: 5px solid red;
  height: 10px;
  width: 10px;
`;

const Wrapper = styled.div`
  border: 2px solid ${(props) => (props.assigned ? "blue" : "red")};
`;

export default Wrapper;
