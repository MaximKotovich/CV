import React from 'react'
import style from './app.module.scss'
import { AboutPage } from './about.page/about.page'
import { Header } from './header/header'
import { SkillsPage } from './skills.page/skills.page'
import { ExperiencesPage } from './experiences/experiences.page'

export const App = () => {
  return (
    <div className={style.app}>
        <Header/>
        <div className={style.container}>
            <AboutPage/>
            <SkillsPage/>
            <ExperiencesPage />
        </div>
    </div>
  )
}
