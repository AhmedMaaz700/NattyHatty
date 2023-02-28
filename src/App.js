import React from 'react'
import './App.css';
import Dashboard from './components/Dashboard';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

function App() {
  const font = "'Work Sans', sans-serif";
  const theme = createTheme({
    typography: {
      fontFamily: font,
      // button: 
        // textTransform: "none"
      },
    })


  return (
    <ThemeProvider theme={theme}>

      <Dashboard />
    
    </ThemeProvider>
  );
}

export default App;
