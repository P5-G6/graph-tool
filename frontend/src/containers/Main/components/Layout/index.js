import React, { Fragment, useState } from "react";

import Options from "./Options";

import ContextProvider from "./context/provider";
import InputSection from "./InputSection";

const OPTIONS = [
  { title: "Add Node", value: "add-node" },
  { title: "Add Vertex", value: "add-vertex" },
  { title: "Calculate", value: "calculate" },
];

export default function Layout({ children }) {
  return (
    <Fragment>
      <ContextProvider>
        <Options options={OPTIONS} />
        <InputSection />
      </ContextProvider>
      {children}
    </Fragment>
  );
}
