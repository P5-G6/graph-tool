import React from "react";

import Types from "./Types";

export default function Input({ type = null, ...props }) {
  const RenderItem = Types[type] ?? Types.default;

  return <RenderItem {...props} />;
};


