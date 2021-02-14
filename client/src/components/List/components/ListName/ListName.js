import React, { useEffect, useRef, useState } from "react";

import { useListsHooks } from "@hooks";

import Wrapper, { StyledInput } from "./styled";

const ListName = ({ index, listName }) => {
  const { renameList } = useListsHooks();

  const inputRef = useRef();

  const [innerListName, setInnerListName] = useState(listName);
  const [isEditingName, setIsEditingName] = useState(false);

  const handleEscapeKey = (keyDownEvent) => {
    if (keyDownEvent.key === "Escape") {
      setIsEditingName(() => false);
      window.getSelection().removeAllRanges();
    }
  };

  const handleListNameChange = (newValue) => {
    setInnerListName(() => newValue.target.value);
    renameList(index, newValue.target.value);
  };

  const handleOutsideClick = (clickEvent) =>
    !clickEvent.path.find((node) => node === inputRef.current) &&
    setIsEditingName(() => false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInnerListName(() => e.target.children[0].value);
    setIsEditingName(() => false);
    window.getSelection().removeAllRanges();
  };

  const handleWrapperClick = () => {
    setIsEditingName(() => true);
    setTimeout(() => {
      !isEditingName && inputRef.current.select();
    }, 0);
  };

  useEffect(() => {
    if (isEditingName) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isEditingName]);

  return (
    <Wrapper onClick={handleWrapperClick}>
      <form
        autoComplete="off"
        onKeyDown={handleEscapeKey}
        onSubmit={handleSubmit}
      >
        <StyledInput
          disabled={!isEditingName}
          name="newListName"
          onChange={handleListNameChange}
          ref={inputRef}
          value={innerListName}
        />
      </form>
    </Wrapper>
  );
};

export default ListName;
