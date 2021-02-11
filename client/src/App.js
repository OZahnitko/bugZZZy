import "draft-js/dist/Draft.css";
import { Button } from "antd";
import { convertToRaw, Editor, EditorState, RichUtils } from "draft-js";
import React, { useEffect, useState } from "react";

import { IssuesContainer } from "@components";
import { useAppHooks } from "@hooks";

import sampleData from "./sampleData_2.json";
import RootWrapper, { EditorWrapper } from "./styled";

const App = () => {
  const { addIssue, setColumns, setIssues } = useAppHooks();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleGetContent = () => {
    console.log(convertToRaw(editorState.getCurrentContent()));
  };

  useEffect(() => {
    setColumns(sampleData.columns);
    setIssues(sampleData.issues);
  }, []);

  return (
    <RootWrapper>
      <EditorWrapper>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          spellCheck={true}
        />
      </EditorWrapper>
      <Button onClick={handleGetContent} type="primary">
        get CONTENT
      </Button>
      <Button
        onClick={() => {
          setEditorState(() =>
            RichUtils.toggleBlockType(editorState, "header-two")
          );
        }}
      >
        TOGGLE BLOCK to H2
      </Button>
      <Button
        onClick={() => {
          setEditorState(() =>
            RichUtils.toggleBlockType(editorState, "header-one")
          );
        }}
      >
        TOGGLE BLOCK to H1
      </Button>
      <IssuesContainer />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target[0].value);
          const newIssueTitle = e.target[0].value;
          const newIssueBody = e.target[1].value;
          const newIssueAssignTo = e.target[2].value;
          console.log(newIssueAssignTo);
          addIssue({ newIssueAssignTo, newIssueBody, newIssueTitle });
        }}
      >
        <label htmlFor="issueName">Issue Name:</label>
        <br />
        <input name="issueName" id="issueName" />
        <br />
        <label htmlFor="issueBody">Issue Description:</label>
        <br />
        <textarea name="issueDescription" id="issueDescription" />
        <br />
        <label htmlFor="issueAssignTo">Assign to:</label>
        <br />
        <select>
          <option value="unassigned">Unassigned</option>
          <option value="sasha">Sasha</option>
          <option value="billy">Billy</option>
        </select>
        <br />
        <button>Save</button>
      </form>
    </RootWrapper>
  );
};

export default App;
