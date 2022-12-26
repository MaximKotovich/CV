import React from 'react'
import style from './app.module.scss'
import { HomePage } from './home.page/home.page'
import { Header } from './header/header'
import { SkillsPage } from './about.page/skills.page'

export const App = () => {
  return (
    <div className={style.app}>
        <Header/>
        <div className={style.container}>
            <HomePage/>
            <SkillsPage/>
        </div>
    </div>
  )
}
