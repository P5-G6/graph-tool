import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-directon: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};
  ${({ width }) => `width:${width};` ?? "min-width: 20px;"}
  min-height: 25px;
  max-height: 40px;
  border: 1 px solid transparent;

  border-radius: 10px;
  padding: 5px 10px;

  .btn-label {
    display: flex;
    font-size: 14;
    font-weight: bold;
    text-align: center;
    color: ${({ labelColor }) => labelColor};
  }

  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.5;
  }
`;
