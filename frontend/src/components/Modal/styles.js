import styled from "styled-components";

import { slideInBottom, slideOutBottom } from "../../appassets/animations";

const Transitions = {
  "open-transition": slideInBottom,
  "close-transition": slideOutBottom,
};

export const Container = styled.div`
  position: fixed;
  z-index: 300;

  animation-name: ${({ mode }) => Transitions[mode] ?? "none"};
  animation-duration: ${({ duration }) => duration / 1000}s;

  ${({ position }) => (position === "right" ? "right: 10px;" : "left: 10px")};
  bottom: 10px;
`;
