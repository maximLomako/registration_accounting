import React from "react";
import s from './header.module.css'

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={'container'}>
        <h3>/ Главная</h3>
      </div>
    </div>
  )
}