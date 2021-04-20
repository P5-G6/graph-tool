import React from 'react';

import { Input } from './styles';

export default function TextInput({
  value = '',
  onChange = null,
  placeholder = '',
  onSubmit = null
}) {
  const handleChange = ({ target: { value: inputValue } }) => {
    if (onChange) onChange(inputValue);
  };

  const handleSubmit = () => {
    if(onSubmit) onSubmit();
  }

  return (
    <Input placeholder={placeholder} onChange={handleChange} value={value} onSubmit={handleSubmit} />
  );
}
