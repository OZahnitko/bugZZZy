import styled from "styled-components";

const Wrapper = styled.div`
  background: ${({
    theme: {
      colors: { gallery },
    },
  }) => gallery};
  border: 2px solid lightseagreen;
  width: 400px;
`;

export default Wrapper;
