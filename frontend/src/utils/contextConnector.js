import React, { useReducer } from "react";

const contextConnector =
  (reducer, initialState) =>
  (
    mapStateToProps = (_state) => _state,
    mapDispatchToProps = (_dispatch) => _dispatch
  ) =>
  (Component) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const props = {
      ...mapStateToProps(state),
      ...mapDispatchToProps(dispatch),
    };

    return <Component {...props} />;
  };

export default contextConnector;
