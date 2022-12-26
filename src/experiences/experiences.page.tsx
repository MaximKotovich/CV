import React from 'react'
import style from './experiences-page.module.scss'
import { motion } from 'framer-motion'
import { animation } from '../common/animation'
import { HeaderValuesEnum } from '../common/enums/header-values.enum'

export const ExperiencesPage = () => {
  const experienceContent = [
    {
      name: 'Education',
      cards: [
        {
          title: 'Grodno State Polytechnic College',
          years: '2013-2017',
          description: 'Computer Engineering, Systems, and Networks'
        },
        {
          title: 'Yanka Kupala State University of Grodno',
          years: '2017-2022',
          description: 'Information measuring technology, evening form of education'
        }
      ]
    },
    {
      name: 'Work Experience',
      cards: [
        {
          title: 'IntexSoft',
          years: '2021-2022',
          description: 'FullStack Developer. I had responsibilities are create ui part using ReactJs, implementation new technologies, optimization and refactoring code, code review, create unit tests, create backend part using NodeJs with different frameworks '
        },
        {
          title: 'Freelance',
          years: '2022-currently',
          description: 'FullStack Developer. I had responsibilities are create ui part using ReactJs, implementation new technologies, optimization and refactoring code, code review, create unit tests, create backend part using NodeJs with different frameworks'
        }
      ]
    }

  ]

  return (
        <motion.div
            id={HeaderValuesEnum.Experiences}
            initial='hidden'
            whileInView='visible'
            variants={ animation }
            viewport= {{ amount: 0.2 }}
            className={ style.experienceContainer }>
            <h1>Experiences</h1>
            <div className={style.experienceContent}>
                {experienceContent.map((item, index) =>
                    <div className={style.experienceBlock} key={index}>
                        <h2>{item.name}</h2>
                      {item.cards.map((card, index) =>
                          <div className={style.experienceItem} key={index}>
                            <h4><span>{card.years}</span> {card.title}</h4>
                            <p>{card.description}</p>
                          </div>
                      )}

                    </div>
                )}
            </div>
        </motion.div>
  )
}
