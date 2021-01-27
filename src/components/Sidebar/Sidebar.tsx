import React from "react";
import {InputField} from "./InputField/InputField";
import s from './sidebar.module.css'

type SideBarPropsType = {
  lastName: string
  name: string
  patronymic: string
  idNum: string
  passportSeries: string,
  passportNumber: string
  onChangeField: (criterion: string, value: string) => void
}

export const SideBar: React.FC<SideBarPropsType> = (props) => {
  return (
    <div className={s.sidebar}>
      <div className={s.sidebarHeader}>Регистрационный учет</div>
      <div className={s.sidebarForm} onSubmit={() => {
      }}>
        <InputField
          label="Фамилия"
          placeholder="ВВЕДИТЕ ФАМИЛИЮ"
          value={props.lastName}
          onChangeField={props.onChangeField}
          dataType={'lastName'}
        />
        <InputField
          label="Имя"
          placeholder="ВВЕДИТЕ ИМЯ"
          value={props.name}
          onChangeField={props.onChangeField}
          dataType={'name'}
        />
        <InputField
          label="Отчество"
          placeholder="ВВЕДИТЕ ОТЧЕСТВО"
          value={props.patronymic}
          onChangeField={props.onChangeField}
          dataType={'patronymic'}
        />
        <InputField
          label="Идентификационный номер"
          placeholder="ВВЕДИТЕ НОМЕР"
          value={props.idNum}
          onChangeField={props.onChangeField}
          dataType={'idNum'}
        />
        <div className={s.dataPassport}>
          <InputField
            label="Серия"
            placeholder=""
            value={props.passportSeries}
            onChangeField={props.onChangeField}
            dataType={'passportSeries'}
          />
          <InputField
            label="№ паспорта"
            placeholder=""
            value={props.passportNumber}
            onChangeField={props.onChangeField}
            dataType={'passportNumber'}
          />
        </div>
        <button
          className={s.sidebarButton}
        >Поиск в локальной БД
        </button>
      </div>
    </div>
  )
}