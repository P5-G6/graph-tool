import React, { useReducer } from "react";

import { INITIAL_STATE as initialState, reducer } from "./reducer";
import Context from "./context";

export default function LayoutContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
