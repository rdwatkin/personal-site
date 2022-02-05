import React from 'react'
import { Box } from '@mui/material'
import styles from './HomeView.module.scss'
import profileBlob from '../../assets/pictures/profileBlob.png'

export const HomeView = () => {
  return (
    <Box className={styles.home}>
      <img src={profileBlob} alt={"idk"} className={styles.profile} />
      <Box>
        <h1>yooo</h1>
      </Box>
    </Box>
  )
}

export default HomeView
