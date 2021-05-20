import React, { useCallback, useEffect, useRef } from "react";

import Types from "./Types";

function InputForms({ type, ...props }) {
  const InputItem = Types[type] ?? (() => null);
  const formsRef = useRef({});

  const assignForms = useCallback(() => {
    if (type) {
      formsRef.current = {};
    }
  }, [type, formsRef]);

  const handleChange = (key, value) => {
    formsRef.current[key] = value;
  };

  const handleSubmit = useCallback(() => {
    console.log("Formss", formsRef.current);
  }, [formsRef]);

  useEffect(() => {
    assignForms();
    return () => (formsRef.current = null);
  }, [assignForms, formsRef]);

  return (
    <InputItem onSubmit={handleSubmit} onChange={handleChange} {...props} />
  );
}

export default InputForms;
