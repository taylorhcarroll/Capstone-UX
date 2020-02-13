import React from 'react';
import {
  withStyles,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const CssTextField = withStyles({
  root: {
    'MuiInputBase-root': {
      color: "red"
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    color: 'white',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));


export default function CustomizedInputs() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
    <form className={classes.root} noValidate>
      <CssTextField
        // className={classes.margin}
        label="Custom CSS"
        variant="outlined"
        id="custom-css-outlined-input"
        // InputProps= {classes.input}
      />
    </form>
    </ThemeProvider>
  );
}
