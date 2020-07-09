import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SearchField from './SearchField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0),
      width: theme.spacing(50),
      height: theme.spacing(60),
    },
  },
}));

export default function CountryData() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <h2 style={{ textAlign: 'center' }}>Country Data</h2>
        <SearchField></SearchField>
      </Paper>
    </div>
  );
}
