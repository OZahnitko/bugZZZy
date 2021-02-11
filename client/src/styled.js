import styled from "styled-components";

export const EditorWrapper = styled.div`
  border: 10px solid green;
  height: auto;
  overflow: hidden auto;

  .DraftEditor-root {
    background-color: #eeeeee;
    height: 200px;
    width: 50%;
    overflow-y: auto;
  }

  .DraftEditor-editorContainer,
  .public-DraftEditor-content {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .public-DraftStyleDefault-block,
  .public-DraftStyleDefault-ltr {
    background: white;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    width: 100%;
    display: block;
    padding: 5px;
    border: 2.5px solid #eeeeee;
  }

  h1 {
    color: red;
    margin: 0;
    padding: 0;
  }

  h2 {
    color: blue;
    margin: 0;
    padding: 0;
  }
`;

const RootWrapper = styled.div`
  border: 5px solid red;
  box-sizing: border-box;
  height: 100%;
  min-height: 100%;
  overflow: hidden auto;
  width: 100%;
`;

export default RootWrapper;
