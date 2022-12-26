import React from 'react'
import style from './header.module.scss'
import { HeaderValuesEnum } from '../common/enums/header-values.enum'
export const Header = () => {
  return (
        <div className={style.header}>
            <div className={style.headerContainer}>
                <div className={style.logo}>CV</div>
                <ul>
                    {Object.values(HeaderValuesEnum).map((item, index) =>
                        <li key={index}><a href={`#${item}`}>{item}</a></li>)}
                </ul>
            </div>
        </div>
  )
}
