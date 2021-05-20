import styled from "styled-components";

const palette = {
  background: "#fff",
  selectedItem: "#000",

  text: {
    dark: "#fff",
    light: "#000",
  },
};

const measures = {
  shadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  radius: "10px",
};

export const Container = styled.div`
  display: flex;
  height: 45px;
  flex-direction: row;

  position: fixed;
  top: 10px;
  left: 10px;
  right: 10px;

  background-color: ${palette.background};

  z-index: 500;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: row;
  box-shadow: ${measures.shadow};
  padding: 15px;
  gap: 5px;

  justify-content: center;
  align-items: center;
  border-radius: ${measures.radius};
`;

export const SelectableItem = styled.div`
  display: flex;
  padding: 10px;
  height: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ selected }) =>
    palette[selected ? "selectedItem" : "background"]};
  color: ${({ selected }) => palette.text[selected ? "dark" : "ligh"]};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};

  border-radius: ${measures.radius};
  overflow: hidden;

  transition: 0.2s box-shadow;

  &:hover {
    box-shadow: ${measures.shadow};
  }

  cursor: pointer;
`;
