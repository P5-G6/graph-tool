import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 300;

  ${({ position }) => (position === "right" ? "right: 10px;" : "left: 10px")};
  bottom: 10px;
`;
