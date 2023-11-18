import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyC49c-hAJ7vRwXl7T8OXrBTJTi0EjF2tIw",
  authDomain: "proyectofinal-dschoen.firebaseapp.com",
  projectId: "proyectofinal-dschoen",
  storageBucket: "proyectofinal-dschoen.appspot.com",
  messagingSenderId: "874638274640",
  appId: "1:874638274640:web:71f11df3e61df0f440e155"
};

initializeApp(firebaseConfig);

const theme = createTheme({
  palette: {
    primary: {
      main: "#320000",
    },
    secondary: {
      main: "#5d2417  ",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>;
  </React.StrictMode>
);

