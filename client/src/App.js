import React, { useEffect } from "react";

import { IssuesContainer } from "@components";
import { useAppHooks } from "@hooks";

import sampleData from "./sampleData_2.json";
import RootWrapper from "./styled";

const App = () => {
  const { setColumns, setIssues } = useAppHooks();

  useEffect(() => {
    setColumns(sampleData.columns);
    setIssues(sampleData.issues);
  }, []);

  return (
    <RootWrapper>
      <IssuesContainer />
    </RootWrapper>
  );
};

export default App;
