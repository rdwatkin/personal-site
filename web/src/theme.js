import { createTheme } from '@mui/material'

export const palette = {
  purple: {
    main: '#a16a91',
  },
  grey: {
    _100: '#000000',
    _80: '#333333',
    _60: '#666666',
    _40: '#999999',
    _10: '#E6E6E6',
    _5: '#F2F2F2',
  },
  white: {
    main: '#f8f8f3',
  },
}

export const theme = createTheme({
  palette: {
    primary: {
      main: palette.purple.main,
    },
    secondary: {
      main: palette.white.main,
    },
    light: {
      main: palette.grey._5,
    },
    text: {
      primary: palette.grey._80,
    },
    background: {
      default: palette.white.main,
    }
  },
  typography: {
    fontFamily: 'AASmartSans',
    h1: {
      fontWeight: 400,
      fontSize: 32,
    },
    h2: {
      fontWeight: 400,
      fontSize: 28,
    },
    h3: {
      fontWeight: 400,
      fontSize: 22,
    },
    h4: {
      fontWeight: 400,
      fontSize: 18,
    },
    body1: {
      fontWeight: 400,
      fontSize: 14,
    },
    button: {
      textTransform: 'none',
    },
    shape: {
      borderRadius: 0,
    }
  },
})
