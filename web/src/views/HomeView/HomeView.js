import React from 'react'
import {
  Box,
  Typography,
  Stack,
} from '@mui/material'
import styles from './HomeView.module.scss'
import profileBlob from '../../assets/pictures/profileBlob.png'

export const HomeView = () => {
  return (
    <Box className={styles.home}>
      <Box>
        <img src={profileBlob} alt={"idk"} className={styles.profile}/>
      </Box>

      <Box className={styles.descriptionContainer}>
        <Stack spacing={2} direction='column' className={styles.description}>
          <Typography variant='h6' sx={{ color: '#a16a91' }}>Software Engineer</Typography>
          <Typography variant='h3'>Hello, I'm Ryan</Typography>
          <Typography
            variant='h6'
            sx={{
              color: '#646464',
              textAlign: 'left',
            }}
          >
            I like to play video games, basketball, edit videos, code, build keyboards and more!
          </Typography>
        </Stack>
      </Box>
    </Box>
  )
}

export default HomeView
