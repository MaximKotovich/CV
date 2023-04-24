import { Alert, Snackbar } from '@mui/material'
import React from 'react'
import style from './snack-bar.module.scss'

interface IProps {
    openAlert: boolean
    handleCloseAlert: () => void
    severity?: 'error'|'warning'|'info'|'success'
    message: string
}
export const SnackBarComponent = ({ openAlert, handleCloseAlert, severity = 'success', message }: IProps) => {
  return (
        <Snackbar
            classes={{ root: style.snackBar }}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={openAlert}
            autoHideDuration={3000}
            onClose={handleCloseAlert}>
            <Alert onClose={handleCloseAlert} variant="filled" severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
  )
}
