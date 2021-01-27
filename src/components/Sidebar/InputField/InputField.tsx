import React, {ChangeEvent} from "react";
import s from './inputField.module.css'

type InputFieldPropsType = {
  label: string
  placeholder: string
  value: string
  dataType: string
  onChangeField: (criterion: string, value: string) => void
}

export const InputField: React.FC<InputFieldPropsType> = (props) => {
  const {label, placeholder, onChangeField} = props;
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeField(props.dataType, e.currentTarget.value)
  }
  return (
    <label className={s.label}>
      {label}
      <input
        className={s.input}
        type='text'
        placeholder={placeholder}
        value={props.value}
        onChange={onChangeHandler}
      />
    </label>
  )
}