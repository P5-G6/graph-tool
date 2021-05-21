import React from "react";

import Types from "./Types";

function ListItem({ type, ...props }) {
  const RenderItem = Types[type] ?? Types.default;

  return <RenderItem {...props} />;
};

export default ListItem;
