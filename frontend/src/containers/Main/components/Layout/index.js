import React from "react";

import Sidebar from "../Sidebar";

import { Container } from "./styles";

function Layout({ children }) {
  return (
    <Container>
      <div className="side-bar">
        <Sidebar />
      </div>
      <div className="main-content">{children}</div>
    </Container>
  );
}

export default Layout;
