import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;

  gap: 10px;

  padding: 15px;

  background-color: #980000;

  .input-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5;

    .text-input {
      display: flex;
      flex: 1;
    }
    .add-button {
      display: flex;
      height: 100%;
      padding-left: 5px;
    }
  }

  .list-section {
    display: flex;
    flex: 1;
    overflow: hidden;
  }
`;
