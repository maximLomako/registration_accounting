import React from "react";
import s from './inputField.module.css'

type InputFieldPropsType = {
  label: string
  placeholder: string
  value: string
  onChange: () => void
}

export const InputField: React.FC<InputFieldPropsType> = (props) => {
  const {label, placeholder, value, onChange} = props;
  return (
    <label className={s.label}>
      {label}
      <input className={s.input}
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={() => {}}
      />
    </label>
  )
}