import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashBoard from '../src/app/pages/Dashboard/DashBoard';
import GistDetails from '../src/app/pages/GistDetails/GistDetails';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

 const theme = createMuiTheme({
   palette: {
     primary: {
       main: '#424242',
     },
     type: 'dark',
   },
 })
  return (
     <ThemeProvider theme={theme}>
      <CssBaseline/>
    <Router>
      <div>
        <Route path='/' exact={true} component={DashBoard} />
        <Route path='/:userName/:id' component={GistDetails} />
      </div>
    </Router>
    </ThemeProvider>
  )
}

export default App;
