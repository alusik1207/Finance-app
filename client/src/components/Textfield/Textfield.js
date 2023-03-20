import React, {
  useCallback,
  useMemo,
  useState,
} from "react";
import "./TextField.scss";

const TextField = ({
  value,
  onChange,
  label,
  error,
  placeholder,
  id,
  name,
  type = "text",
}) => {
  const handleChancge = useCallback(
    (e) => {
      const target = e.target;
      const {value,name} = target;
      onChange(value, name);
    },
    [onChange]
  );
  const errorBlock = useMemo(() => {
    if (!error) {
      return null;
    }
    return <div className="text_field__error">{error}</div>;
  }, [error]);
  return (
    <div className="text_field__wrapper">
      <label htmlFor={id} className="text_field__label">
        {label}
      </label>
      <input
        type={type}
        className={`text_field  ${
          error ? "text_field-error" : ""
        }`}
        id={id}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={handleChancge}
      />
      {errorBlock}
    </div>
  );
};

export default TextField;
