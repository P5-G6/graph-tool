import React, { Fragment } from "react";

import Options from "./Options";

import ContextProvider from "./context/provider";
import InputSection from "./InputSection";
import ConnectedModalContent from "./connectedModalContent";
import ConnectedModal from "./connectedModal";
import ConnectedModalCalculate from "./connectedNodeCalculateShow";

const OPTIONS = [
  { title: "Add Node", value: "add-node" },
  { title: "Add Edge", value: "add-edge" },
  { title: "Calculate", value: "calculate" },
];

export default function Layout({ children }) {
  return (
    <Fragment>
      <ConnectedModal position='left'>
        <ConnectedModalCalculate />
      </ConnectedModal>
      <ConnectedModal>
        <ConnectedModalContent />
      </ConnectedModal>
      <ContextProvider>
        <Options options={OPTIONS} />
        <InputSection />
      </ContextProvider>
      {children}
    </Fragment>
  );
}
