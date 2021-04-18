import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-directon: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};

  border-radius: 15px;

  .btn-label {
    display: flex;
    font-size: 14;
    font-weight: bold;
    text-align: center;
    color: ${({ labelColor }) => labelColor};
  }

  cursor: pointer;

  transition: opacity .2s;

  &:hover {
    opacity: 0.5;
  }
`;
