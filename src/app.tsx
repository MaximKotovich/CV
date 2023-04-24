import React, { useState } from 'react'
import style from './app.module.scss'
import { AboutPage } from './about.page/about.page'
import { Header } from './header/header'
import { SkillsPage } from './skills.page/skills.page'
import { ExperiencesPage } from './experiences/experiences.page'
import { ContactsPage } from './contacts.page/contacts.page'
import { SnackBarComponent } from './common/snack-bar.component/snack-bar.component'

export const App = () => {
  const [openAlert, setOpenAlert] = useState<boolean>(false)
  const handleCloseAlert = () => {
    setOpenAlert(false)
  }
  return (
    <div className={style.app}>
        <Header/>
         <SnackBarComponent
            openAlert = {openAlert}
            handleCloseAlert = {handleCloseAlert}
            message={'Your mail was sent'}
         />
        <div className={style.container}>
            <AboutPage/>
            <SkillsPage/>
            <ExperiencesPage />
            <ContactsPage setOpenAlert = {setOpenAlert}/>
        </div>
    </div>
  )
}
