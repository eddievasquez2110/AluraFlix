import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme =  createTheme({
  palette: {
    encabezado: {
      // This is green.A700 as hex.
      main: '#F5F5F5',
    },
    primario: {
      // Purple and green play nicely together.
      light: '#2060b5',
      main: '#2A7AE4',
      dark: '#2060b5',
      contrastText: 'white',
    },
    secundario: {
      light: '#d5d5d5',
      main: '#9E9E9E',
      dark: '#d5d5d5',
      contrastText: 'black',
    }
  },

  typography: {
    fontFamily: [
      'sans-serif'
    ].join(','),
  },

});

export default function Palette({
    
  color,
  tipo

}) {
  return (   
    <ThemeProvider theme={theme}>
        <Button color={color} variant={tipo}>Nuevo Video</Button>
    </ThemeProvider>
  );
}
