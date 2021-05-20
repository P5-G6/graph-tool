import React, { useCallback } from "react";

import styled from "styled-components";

export default function TextType({ onChange, placeholder = "" }) {
  const handleChange = useCallback(
    ({ target }) => {
      console.log(target?.value);
      if (onChange) onChange(target?.value);
    },
    [onChange]
  );

  return <Input onChange={handleChange} {...{ placeholder }} />;
}

const Input = styled.input`
  display: flex;
  height: 25px;
  width: 96%;
  
  border-radius: 10px;

  ::placeholder {
    color: #c8c8c;
    font-weight: bold;
  }

  &:focus {
      outline: none;
  }
`;
