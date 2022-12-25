import React from 'react'
import style from './app.module.scss'
import { HomePage } from './home.page/home.page'
import { Header } from './header/header'

export const App = () => {
  return (
    <div className={style.app}>
        <Header/>
        <div className={style.container}>
            <HomePage/>
        </div>
    </div>
  )
}
