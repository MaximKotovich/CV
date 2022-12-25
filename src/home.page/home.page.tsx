import React from 'react'
import style from './home-page.module.scss'
import pic from '../img/main-image.jpg'

export const HomePage = () => {
  return (
      <div className={style.aboutContainer}>
          <div className={style.aboutBlock}>
              <img className={style.mainImage} src={pic}></img>
              <div className={style.infoBlock}>
                  <h1>Maxim Kotovich</h1>
                  <h2>Full Stack Developer</h2>
              </div>
          </div>
      </div>
  )
}
