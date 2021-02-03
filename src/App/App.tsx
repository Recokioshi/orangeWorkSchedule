import React from 'react';
import Header from '../Header/Header'
import Params from '../Params/Params'
import Calendar from '../Calendar/Calendar'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import getStyles from '../Styles/Styles';

function App() {
  const classes = getStyles();
  console.log('classes: ' + classes);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header classes={classes} />
      <Params classes={classes} />
      <Calendar classes={classes} />
    </div>
  );
}

export default App;
