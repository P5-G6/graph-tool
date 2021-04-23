import styled from 'styled-components';

export const FloatingConttent = styled.div`
  position: fixed;
  left: 280px;
  top: 10px;
  z-index: 200;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  gap: 10px;

  .text-input {
    display: flex;
    flex: 1;
  }

  .submit-button {
    display: flex;
    width: 40px;
    height: 100%;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    background-color: #fff;
    border-radius: 10px;
  }
`;
