import React from "react";

import Types from "./Types";

export default function CalculateShow({ type, ...props }) {
  const RenderItem = Types[type] ?? Types.input;

  return <RenderItem {...props} />;
}
