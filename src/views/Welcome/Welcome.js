/* eslint no-undef: 0 */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core';

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

  const [verificationCode, setVerificationCode] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log( 'verificationCode:', verificationCode);
  }

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
              We have just sent you a text message with a 6-digit verification code.
            </Typography>

            <form
              className={classes.container}
              onSubmit={handleSubmit}
            >
              <TextField
                onInput={e=>setVerificationCode(e.target.value)}
                value={verificationCode}
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
                Login
              </Button>
            </form>

          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Welcome;
