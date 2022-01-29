import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import React from 'react';
import './App.css';
import AppLayout from './components/AppLayout';
import { theme } from './theme';

function App() {
  return (
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
    <AppLayout />
    </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
