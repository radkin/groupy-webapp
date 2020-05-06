/* eslint no-undef: 0 */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core';
// requirements for cookies
import Cookies from 'universal-cookie';
import axios from 'axios';
const cookies = new Cookies();
const cookieExists = cookies.get('groupy');
const server = process.env.REACT_APP_GROUPY_GRAPHQL_SERVER;
const port = process.env.REACT_APP_PORTNUM;
let transferProtocol = 'https';
if (process.env.REACT_APP_PORTNUM) {
  transferProtocol = 'http';
}

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
  const [isReadyForSixDigitCode, setSixDigitCodeStatus] = useState(false);
  const [sixDigitCode, requestToken] = useState('');

  // get 6-digit-code
  const handleContactSubmit = async (event) => {
    event.preventDefault();
    console.log( 'phoneNumber:', phoneNumber);
    if (await getData(phoneNumber)) {
      console.log('requested 6-digit code');
    } else {
      return 'something went wrong with our request';
    }
  }

  const getData = (contact) => {
    axios.post(`${transferProtocol}://${server}:${port}/${contact}`)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setSixDigitCodeStatus(true);
        } else {
          console.log('server response was not valid');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // get token
  const handleTokenSubmit = async (event) => {
    event.preventDefault();
    console.log( 'sixDigitCode:', sixDigitCode);
    if (await getToken(sixDigitCode)) {
      console.log('requested JWT token');
    } else {
      return 'something went wrong with our request';
    }
  }

  const getToken = (sixDigitCode) => {
    axios.post(`${transferProtocol}://${server}:${port}/verify/${phoneNumber}/${sixDigitCode}`)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          console.log('time to create the cookie');
          const cookieData = {
            token: response.data.token,
            userID: response.data.userID
          }
          cookies.set('groupy',
            cookieData,
            { path: '/' }
          );
          console.log(cookies.get('groupy'));
        } else {
          console.log('server response was not valid');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (isReadyForSixDigitCode) {
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
                Enter your six-digit "verification code"
              </Typography>

              <form
                className={classes.container}
                onSubmit={handleTokenSubmit}
              >
                <TextField
                  onInput={e=>requestToken(e.target.value)}
                  value={sixDigitCode}
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
                Please Enter your Phone Number with country code
              </Typography>
              <p> </p>
              <Typography>
                For USA use +1 in front, E.G. +1310 (LA area code)
              </Typography>

              <form
                className={classes.container}
                onSubmit={handleContactSubmit}
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
