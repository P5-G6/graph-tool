import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #C4C4C4;
  border-radius: 10px;
  height: 65px;

  .section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 5px;
  }

  .primary-section {
    border-radius: 10px;
    background-color: #fff;
  }
`;
