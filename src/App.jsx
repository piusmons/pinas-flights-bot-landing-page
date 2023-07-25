
import './App.css'
import Home from './pages/Home'
import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';

import Box from '@mui/joy/Box';
import CssBaseline from '@mui/joy/CssBaseline';
import IconButton from '@mui/joy/IconButton';

// Icons import
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

import framesxTheme from '/theme.js';


  function ColorSchemeToggle() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) {
      return null;
    }
    return (
      <IconButton
        id="toggle-mode"
        size="lg"
        variant="soft"
        color="neutral"
        onClick={() => {
          if (mode === 'light') {
            setMode('dark');
          } else {
            setMode('light');
          }
        }}
        sx={{
          position: 'fixed',
          zIndex: 999,
          top: '1rem',
          right: '55rem',
          borderRadius: '50%',
          boxShadow: 'sm',
        }}
      >
        {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>
    );
  }
  
  
  function App() {
    
    

    return (
      <CssVarsProvider disableTransitionOnChange theme={framesxTheme}>
      <CssBaseline />
      <ColorSchemeToggle />
      <Box
        sx={{
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          
        }}
      >
        <Home/>
      </Box>
    </CssVarsProvider>
    )
  }

export default App

