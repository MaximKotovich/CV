import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import style from './contacts-page.module.scss'
import TelegramIcon from '@mui/icons-material/Telegram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TtyIcon from '@mui/icons-material/Tty'
import { useClipboard } from 'use-clipboard-copy'
import { useForm } from 'react-hook-form'
import { Alert, Button, FormControl, FormHelperText, Snackbar, TextField } from '@mui/material'
import { HeaderValuesEnum } from '../common/enums/header-values.enum'
import { animation } from '../common/animation'
import { motion } from 'framer-motion'
// @ts-ignore
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
interface IFormValues {
    name: string
    email: string
    description: string
}
interface IProps {
    setOpenAlert: Dispatch<SetStateAction<boolean>>
}

const mobilePhone = '+375(33)620-69-85'
const defaultValuesForForm: IFormValues = {
  name: '',
  email: '',
  description: ''
}

export const ContactsPage = ({ setOpenAlert }: IProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const clipboard = useClipboard()
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
    defaultValues: defaultValuesForForm
  })

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(defaultValuesForForm)
    }
  }, [isSubmitSuccessful, reset])
  const openSocialMedia = (link: string) => {
    window.open(link, '_blank', 'noreferrer')
  }

  const copyMobilePhone = () => {
    clipboard.copy(mobilePhone)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const sendMessage = async (data:IFormValues, e:any) => {
    e.preventDefault()
    emailjs.sendForm('service_9cjuikq', 'template_sa1uylb', e.target, 'Mka-AAcmGprKEbSCk')
      .then((result:EmailJSResponseStatus) => { setOpenAlert(true); console.log(result.status) })
      .catch((error:EmailJSResponseStatus) => console.log(error.text))
  }

  return (
        <motion.div
            id={HeaderValuesEnum.Contacts}
            initial='hidden'
            whileInView='visible'
            variants={ animation }
            viewport= {{ amount: 0.2 }}
            className={style.contactsPageContainer}>
          <h1>Contacts</h1>
            <div className={style.contactsInformationContainer}>
                <div className={style.linksToSocialMedia}>
                    <div className={style.iconBlock} onClick={() => openSocialMedia('https://t.me/max100198')}>
                        <TelegramIcon classes={{ root: style.telegram }}/>
                        <p>Telegram</p>
                    </div>
                    <div className={style.iconBlock} onClick={() => openSocialMedia('https://www.linkedin.com/in/maxim-kotovich-41141521b/')}>
                        <LinkedInIcon classes={{ root: style.linkedIn }}/>
                        <p>LinkedId</p>
                    </div>
                    <div className={style.iconBlock} onClick={copyMobilePhone}>
                        <TtyIcon classes={{ root: style.mobilePhone }}/>
                        <p>{isCopied ? 'Number was copied' : mobilePhone}</p>
                    </div>
                </div>
                <form className={style.feedbackForm} onSubmit={handleSubmit(sendMessage)}>
                    <h3>Feedback form</h3>
                    <FormControl
                        classes={{ root: style.formControl }}
                        fullWidth
                    >
                    <TextField
                         fullWidth
                         label='Your company or name'
                         variant="outlined"
                         InputLabelProps={{
                           classes: { root: errors.name ? style.inputOutLineLabelError : style.inputLabelRoot }
                         }}
                         InputProps={{
                           classes: {
                             input: style.inputOutLineLabelInput,
                             notchedOutline: errors.name ? style.inputOutLineLabelError : style.inputOutLineLabel
                           }
                         }}
                         error={!!errors.name}
                         {...register('name', { required: 'field is required' })}
                    />
                        {errors?.name?.type === 'required' &&
                            <FormHelperText
                                color='error'
                                error
                            >
                                {errors.name.message}
                            </FormHelperText>}
                    </FormControl>
                    <FormControl
                        classes={{ root: style.formControl }}
                        fullWidth
                    >
                    <TextField
                        fullWidth
                        label='Your Email'
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: errors.email ? style.inputOutLineLabelError : style.inputLabelRoot }
                        }}
                        InputProps={{
                          classes: {
                            input: style.inputOutLineLabelInput,
                            notchedOutline: errors.email ? style.inputOutLineLabelError : style.inputOutLineLabel
                          }
                        }}
                        classes={{ root: style.mailTextField }}
                        error={!!errors.email}
                        {...register('email', {
                          required: 'field is required',
                          pattern: /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
                        })}
                    />
                    {errors?.email?.type === 'required' &&
                        <FormHelperText
                            color='error'
                            error
                        >
                            {errors.email.message}
                        </FormHelperText>}
                    {errors?.email?.type === 'pattern' &&
                        <FormHelperText
                            color='error'
                            error
                        >
                            Mail isn&apos;t correct
                        </FormHelperText>
                    }
                </FormControl>
                    <FormControl
                        classes={{ root: style.formControl }}
                        fullWidth
                    >
                    <TextField
                        fullWidth
                        label='Description'
                        multiline
                        variant="outlined"
                        InputLabelProps={{
                          classes: { root: errors.description ? style.inputOutLineLabelError : style.inputLabelRoot }
                        }}
                        InputProps={{
                          classes: {
                            root: style.descriptionInput,
                            input: style.inputOutLineLabelInput,
                            notchedOutline: errors.description ? style.inputOutLineLabelError : style.inputOutLineLabel
                          }
                        }}
                        error={!!errors.description}
                        {...register('description', { required: 'field is required' })}
                    />
                        {errors?.description?.type === 'required' &&
                            <FormHelperText
                                color='error'
                                error
                            >
                                {errors.description.message}
                            </FormHelperText>}
                    </FormControl>
                    <Button
                        classes={{ root: style.formSendButton }}
                        type='submit'
                    >
                        Send Message
                    </Button>
                </form>
            </div>
        </motion.div>
  )
}
