import styled from "styled-components";

export const StyledDragHandle = styled.div``;

export const StyledIssuesContainer = styled.div`
  box-sizing: border-box;
  height: 95%;
  min-height: 40px;
`;

const Wrapper = styled.div`
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  flex: 1;
  margin: 0 1rem 0 1rem;
  padding: 10px;
  position: relative;
  text-align: center;
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export default Wrapper;
