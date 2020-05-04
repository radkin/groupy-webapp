/* eslint no-undef: 0 */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core';
// requirements for cookies
import Cookies from 'universal-cookie';
// import axios from 'axios';

const cookies = new Cookies();
const cookieExists = cookies.get('groupy');

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Welcome = () => {
  const classes = useStyles();

  const [phoneNumber, setVerificationCode] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log( 'phoneNumber:', phoneNumber);
  }

  if (!cookieExists) {
    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={3}
        >
          <Grid>
            <Paper
              className={classes.paper}
            >
              <Typography variant="h1">
                Welcome to groupy
              </Typography>
              <Typography variant="h4">
                Please Enter your Phone Number
              </Typography>

              <form
                className={classes.container}
                onSubmit={handleSubmit}
              >
                <TextField
                  onInput={e=>setVerificationCode(e.target.value)}
                  value={phoneNumber}
                />
                <Typography
                  className={classes.divider}
                />
                <Button
                  className={classes.button}
                  color="secondary"
                  type="submit"
                  variant="outlined"
                >
                  Go
                </Button>
              </form>

            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return <p>WOOT</p>
  }

}

export default Welcome;
