import React from 'react'
import style from './about-page.module.scss'
import pic from '../img/main-image.jpg'
import { Button } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import { HeaderValuesEnum } from '../common/enums/header-values.enum'

export const AboutPage = () => {
  const onButtonClick = () => {
    fetch('MaximKotovich_CV.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob)
        const alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'MaximKotovich_CV.pdf'
        alink.click()
      })
    })
  }

  return (
      <div
          id={HeaderValuesEnum.About}
          className={style.aboutContainer}>
          <div className={style.aboutBlock}>
              <img className={style.mainImage} src={pic}></img>
              <div className={style.infoBlock}>
                  <h1>Maxim Kotovich</h1>
                  <h2>Full Stack Developer</h2>
                  <h3>Hi. I have one year experience as FullStack developer. I have good knowledge of ReactJs, HTML, CSS, NodeJs with different frameworks</h3>
                   <Button
                      onClick={onButtonClick}
                      endIcon={<FileDownloadIcon classes={{ root: style.endIcon }}/>}
                      variant="contained"
                      classes={{
                        root: style.downloadButton
                      }}
                   >Download CV</Button>
              </div>
          </div>
      </div>
  )
}
