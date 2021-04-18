import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;

  flex-direction: row;

  .side-bar {
    display: flex;
    max-height: 100%;
    width: 200px;
  }
  .main-content {
      display: flex;
      flex: 1;
      max-height: 100%;
      flex-direction: column;
  }
`;
