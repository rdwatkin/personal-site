import React from 'react'
import { theme } from 'theme'
import { HomeView } from 'views'
import { Header } from 'components'
import {
  CssBaseline,
  ThemeProvider,
} from '@mui/material'
import configureStore from 'store'
import { Provider } from 'react-redux'
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

/* 
-- Personal Info --
INSERT INTO rybald.personalInfo (id, name, position, description, headshotKey, email)
VALUES(
  UUID(),
  "Ryan Watkins",
  "Software Engineer",
  "I spend my time playing video games, playing basketball, video editing, coding and (occasionally) trying new things!",
  "fakeFileKey",
  "rdwatkin@outlook.com"
);
*/

const store = configureStore(window.__INITIAL_STATE__)

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <CssBaseline/>
          <Header/>
          <Routes>
            <Route path='/home' element={<HomeView/>}/>
            <Route path='*' element={<Navigate replace to={'./home'}/>}/>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
