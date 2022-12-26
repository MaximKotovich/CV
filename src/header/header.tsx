import React from 'react'
import style from './header.module.scss'
export const Header = () => {
  const listForHeader = ['About', 'Skills', 'Experiences', 'Contacts']
  return (
        <div className={style.header}>
            <div className={style.headerContainer}>
                <div className={style.logo}>CV</div>
                <ul>
                    {listForHeader.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        </div>
  )
}
