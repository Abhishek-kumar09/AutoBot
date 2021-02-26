import { CircularProgress } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { connectSearchBox } from "react-instantsearch-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export function CustomizedInputBase({ currentRefinement, isSearchStalled, refine }) {
  const classes = useStyles();

  return (
    <Paper elevation={1} component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Which datasets are you looking for?"
        inputProps={{ 'aria-label': 'Which datasets are you looking for?' }}
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      {isSearchStalled ? (
        <CircularProgress size={25} style={{ marginRight: '10px' }} />
      ) : ""}
    </Paper>
  );
}

const CustomSearchBox = connectSearchBox(CustomizedInputBase);

export default CustomSearchBox;