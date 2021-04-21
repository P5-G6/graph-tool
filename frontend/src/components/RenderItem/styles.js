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
    padding: 5px 10px;
  }

  .primary-section {
    border-radius: 10px;
    background-color: #fff;
  }

  .value {
    display: flex;
    flex: 1;
    font-size: 15;
    font-weight: bold;
  }

  .icon {
    font-size: 20px;
    justify-content: center;
  }
`;
