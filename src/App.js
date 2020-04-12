import React from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DefaultLayout from './modules/movies-browser/DefaultLayout';
import './App.css';

function App() {
  return (
    <div >
      <MuiThemeProvider>
        <DefaultLayout />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
