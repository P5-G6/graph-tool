export const Types = {
  selectOption: "layout/SELECT_OPTION",
  deselectOption: "layout/DESELECT_OPTION",
};

export const INITIAL_STATE = {
  selectedOption: null,
};

export const Creators = {
  selectOption: (option) => ({
    type: Types.selectOption,
    selectedOption: option,
  }),
  deselectOption: () => ({ type: Types.deselectOption }),
};

export const Actions = {
  [Types.selectOption]: (
    { selectedOption: prevSelected, ...state },
    { selectedOption }
  ) => ({
    ...state,
    selectedOption: prevSelected !== selectedOption ? selectedOption : null,
  }),
  [Types.deselectOption]: (state) => ({ ...state, selectedOption: null }),
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.selectOption:
      return Actions[Types.selectOption](state, action);
    case Types.deselectOption:
      return Actions[Types.deselectOption](state, action);
    default:
      throw new Error("undefined method");
  }
};
