import { useState, useEffect, HtmlHTMLAttributes } from 'react';
import setErrorName from './setErrorName';

const useInput = (
  name: string,
  initialValue: string,
  validations: {
    isEmpty: boolean,
    minLength: number
  }
) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const error = useValidation(name, value, validations);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setDirty(true);
  };

  return {
    value,
    setValue,
    onChange,
    onBlur,
    isDirty,
    setDirty,
    error,
  };
};

const useValidation = (name: string, value: string, validations: { isEmpty: boolean, minLength: number}) => {
  const [error, setError] = useState("");

  useEffect(() => {
    setError(setErrorName(name, value, validations));
  }, [value]);

  return error;
};

export { useInput, useValidation };