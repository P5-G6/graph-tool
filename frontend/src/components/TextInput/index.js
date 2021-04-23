import React from 'react';

import { Input } from './styles';

export default function TextInput({
  value = '',
  onChange = null,
  placeholder = '',
  onSubmit = null,
  disabled = false,
}) {
  const handleChange = ({ target: { value: inputValue } }) => {
    if (onChange) onChange(inputValue);
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit();
  };

  return (
    <Input
      {...{ disabled, placeholder, value }}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
