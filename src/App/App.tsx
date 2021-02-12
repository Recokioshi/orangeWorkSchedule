import React from 'react';
import Header from '../Header/Header'
import Params from '../Params/Params'
import Calendar from '../Calendar/Calendar'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  createStyles({
    root: {
      display: 'flex',
    },
  })
)

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Params />
      <Calendar />
    </div>
  );
}

export default App;
