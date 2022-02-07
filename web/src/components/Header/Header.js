import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  Container,
  Toolbar,
  IconButton,
  Slide,
  useScrollTrigger,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['About', 'Experience', 'Hobbies', 'Contact']

const Header = () => {
  const [navAnchor, setNavAnchor] = useState(null)
  const trigger = useScrollTrigger()

  const handleOpenNavMenu = (event) => {
    setNavAnchor(event.currentTarget)
  }

  const handleCloseNavMenu = (event) => {
    setNavAnchor(null)
  }

  const largeScreenHeader = (
    <>
      <Typography
        variant="h5"
        noWrap
        component="div"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
        }}
      >
        Ryan Watkins
      </Typography>
      <Box sx={{
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'right',
      }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: '#f8f8f3', display: 'block' }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </>
  )

  const smallScreenHeader = (
    <>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          flexGrow: 1,
          display: { xs: 'flex', md: 'none' },
        }}
      >
        Ryan Watkins
      </Typography>
      <Box sx={{
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' },
        justifyContent: 'right',
      }}>
        <IconButton
          size="large"
          onClick={handleOpenNavMenu}
        >
          <MenuIcon sx={{ color: '#f8f8f3' }} />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={navAnchor}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(navAnchor)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  )

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      <AppBar position="absolute" color='transparent' elevation={0}>
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            {largeScreenHeader}
            {smallScreenHeader}
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}

export default Header
