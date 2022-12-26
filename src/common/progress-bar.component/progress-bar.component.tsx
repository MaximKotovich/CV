import React, { forwardRef, Ref } from 'react'
import style from './progress-bar.module.scss'
import { motion } from 'framer-motion'

interface IProps {
    value: number
}

const progressBarAnimation = {
  hidden: {
    translateX: '-100%'
  },
  visible: (custom: number) => ({
    translateX: `-${100 - custom}%`,
    transition: { delay: 0.2, duration: 1 }
  })
}

const ProgressBarComponent = forwardRef(({ value }: IProps, ref:Ref<HTMLDivElement>) => {
  return (
        <div ref={ref} className={style.progressBar}>
            <motion.div custom={value} variants={progressBarAnimation} className={style.progress}></motion.div>
        </div>
  )
})

export const MProgressBarComponent = motion(ProgressBarComponent)
