import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #C4C4C4;
  border-radius: 10px;
  height: 65px;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;


  .render-item-section {
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

  .item-value {
    display: flex;
    flex: 1;
    font-size: 15;
    font-weight: bold;
    color: #000;
  }

  .item-icon {
    font-size: 20px;
    justify-content: center;
    color: #000;
  }
`;
