import React from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routing from './modules/movies-browser/Routing';
import './App.css';

function App() {
  return (
    <Routing />
  );
}

export default App;
