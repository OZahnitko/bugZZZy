import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { IssuesContainer } from "@components";
import { useIssuesHooks, useUsersHooks } from "@hooks";

import sampleData from "./sampleData.json";
import RootWrapper from "./styled";

const App = () => {
  const {
    addIssue,
    issueCategories,
    issues,
    setIssueCategories,
    setIssues,
    unassignIssue,
  } = useIssuesHooks();
  const state = useSelector((issues) => issues);
  const { setUsers, users } = useUsersHooks();

  useEffect(() => {
    setIssueCategories(sampleData.issueCategories);
    setIssues(sampleData.issues);
    setUsers(sampleData.users);
  }, []);

  return (
    <RootWrapper>
      <IssuesContainer />
      <pre>
        {JSON.stringify({ issueCategories, issues, state, users }, null, 2)}
      </pre>
    </RootWrapper>
  );
};

export default App;
