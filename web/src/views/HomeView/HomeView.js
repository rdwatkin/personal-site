import React, { useEffect } from 'react'
import {
  Box,
  Typography,
  Stack,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { palette } from 'theme'
import { getAllExperiences } from 'store/actions'
import styles from './HomeView.module.scss'
import profileBlob from '../../assets/pictures/profileBlob.png'

export const HomeView = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllExperiences())
  }, [dispatch])

  return (
    <Box
      className={styles.home}
      sx={{
        justifyContent: { xs: 'center', sm: 'space-between' }
      }}
    >
      <Box className={styles.profileContainer}>
        <img src={profileBlob} alt={"idk"} className={styles.profile}/>
      </Box>

      <Box className={styles.wrapper}>
        <Box className={styles.descriptionContainer}>
          <Box className={styles.border}/>
            <Box className={styles.description}>
              <Stack
                spacing={2}
                direction='column'
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  padding: '15px',
                }}
              >
                <Typography variant='h6' sx={{ color: palette.purple.main }}>Software Engineer</Typography>
                <Typography
                  variant='h3'
                  sx={{
                    textAlign: 'left',
                    fontSize: '45px',
                  }}
                >
                  Hello, I'm Ryan Watkins
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    color: palette.grey._60,
                    textAlign: 'left',
                  }}
                >
                  I like to play video games, basketball, edit videos, code, build keyboards and more!
                </Typography>
              </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HomeView
