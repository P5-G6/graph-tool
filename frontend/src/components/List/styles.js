import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  position: static;
  height: 100%;
  width: 100%;
`;

export const ScrollableView = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  width: 100%;

  padding-bottom: 10px;
`;
