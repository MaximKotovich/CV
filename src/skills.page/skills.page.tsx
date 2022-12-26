import React from 'react'
import style from './skills-page.module.scss'
import { motion } from 'framer-motion'
import { animation } from '../common/animation'
import { MProgressBarComponent } from '../common/progress-bar.component/progress-bar.component'
import { HeaderValuesEnum } from '../common/enums/header-values.enum'

export const SkillsPage = () => {
  const skills = [
    {
      name: 'Hard Skills',
      skills: [
        { name: 'HTML, CSS, JS', procent: 85 },
        { name: 'ReactJs', procent: 80 },
        { name: 'Redux', procent: 75 },
        { name: 'Redux Saga/Thunk', procent: 75 },
        { name: 'Typescript', procent: 70 },
        { name: 'NestJs', procent: 70 },
        { name: 'Sequelize ', procent: 70 },
        { name: 'SQL ', procent: 70 },
        { name: 'Git, Github ', procent: 85 }
      ]
    },
    {
      name: 'Soft Skills',
      skills: [
        { name: 'Adaptability', procent: 85 },
        { name: 'Communication', procent: 90 },
        { name: 'Teamwork', procent: 85 },
        { name: 'Time management ', procent: 80 },
        { name: 'Punctuality', procent: 90 },
        { name: 'Learning ability', procent: 90 }
      ]
    },
    {
      name: 'Languages',
      skills: [
        { name: 'English', procent: 85 }
      ]
    }
  ]

  return (
        <motion.div
            id={HeaderValuesEnum.Skills}
            initial='hidden'
            whileInView='visible'
            variants={ animation }
            viewport= {{ amount: 0.2 }}
            className={style.skillsPageContainer}>
            <h1>Skills</h1>
            <div className={style.skillContent}>
                {skills.map((type, index) =>
                    <div className={style.skillList} key={index}>
                        <h2>{type.name}</h2>
                        { type.skills.map((item, index) =>
                            <div key={index} className={style.listItem}>
                                <div className={style.listItemTitle}>
                                    <p className={style.name}>{item.name}</p>
                                  {type.name === 'Languages' && <p className={style.englishLevel}>A2</p>}
                                </div>
                              {type.name !== 'Languages' && <div className={style.linearProgress}>
                                <MProgressBarComponent value={item.procent}/>
                              </div>}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
  )
}
