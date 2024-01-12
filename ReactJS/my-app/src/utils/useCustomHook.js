import { useState } from 'react';

const useCustomHook = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialState);
  };

  return {
    values,
    handleChange,
    resetForm,
  };
};

export default useCustomHook;
