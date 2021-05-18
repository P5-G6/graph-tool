import React, { useContext, useCallback } from "react";

import { SelectableItem } from "./styles";

import context from "./context/context";
import { Creators } from "./context/reducer";

const getSelected = (state) => state.selectedOption;

export default function Option({ title = "", value = "", icon = null }) {
  const { state, dispatch } = useContext(context);

  const selected = value === getSelected(state);
  const onClick = useCallback(() => {
    dispatch(Creators.selectOption(value));
  }, [dispatch, value]);

  return (
    <SelectableItem {...{ onClick }} {...{ selected }}>
      {title}
    </SelectableItem>
  );
}
