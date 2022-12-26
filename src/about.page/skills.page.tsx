import React from 'react'
import style from './skills-page.module.scss'
import { LinearProgress } from '@mui/material'
import { motion } from 'framer-motion'

const animation = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: -100,
    transition: { delay: 0.2 }
  }
}

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
        { name: 'Time management ', procent: 80 }
      ]
    }
  ]

  return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            variants={animation}
            viewport={{ amount: 0.2 }}
            className={style.skillsPageContainer}>
            <h1>Skills</h1>
            <div className={style.skillContent}>
                {skills.map((type, index) =>
                    <div key={index}>
                        <h2>{type.name}</h2>
                        { type.skills.map((item, index) =>
                            <div key={index} className={style.listItem}>
                                <div className={style.listItemTitle}>
                                    <p className={style.name}>{item.name}</p>
                                </div>
                                <div className={style.linearProgress}>
                                    <LinearProgress
                                        variant="determinate"
                                        value={item.procent}
                                        classes={{
                                          root: style.root,
                                          barColorPrimary: style.barColor
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
  )
}
