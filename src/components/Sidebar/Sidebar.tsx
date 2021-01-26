import React from "react";
import {InputField} from "./InputField/InputField";
import s from './sidebar.module.css'

export const SideBar = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.sidebarHeader}>Регистрационный учет</div>
      <form  className={s.sidebarForm} onSubmit={() => {
      }}>
        <InputField
          label="Фамилия"
          placeholder="ВВЕДИТЕ ФАМИЛИЮ"
          value={''}
          onChange={() => {
          }}
        />
        <InputField
          label="Имя"
          placeholder="ВВЕДИТЕ ИМЯ"
          value={''}
          onChange={() => {
          }}
        />
        <InputField
          label="Отчество"
          placeholder="ВВЕДИТЕ ОТЧЕСТВО"
          value={''}
          onChange={() => {
          }}
        />
        <InputField
          label="Идентификационный номер"
          placeholder="ВВЕДИТЕ НОМЕР"
          value={''}
          onChange={() => {
          }}
        />
        <div className={s.dataPassport}>
          <InputField
            label="Серия"
            placeholder=""
            value={''}
            onChange={() => {
            }}
          />
          <InputField
            label="№ паспорта"
            placeholder=""
            value={''}
            onChange={() => {
            }}
          />
        </div>
        <button className={s.sidebarButton}>Поиск в локальной БД</button>
      </form>
    </div>
  )
}