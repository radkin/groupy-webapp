/* eslint no-undef: 0 */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import $ from 'jquery';
import { Grid, TextField, Paper, Avatar, Typography } from '@material-ui/core';
// import { Notifications, Password } from './components';
// Apollo
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import * as queries from '../../graphql/queries';

const meQuery = gql(queries.users.getMe.graphql);

function handleChange(e) {
  if (e.keyCode === 13) {
    console.log('DO something cool with the contents of our field');
  } else {
    console.log(e.target.value);
  }
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

const EditMyProfile = () => {
  const classes = useStyles();

  // DATA BINDING
  const { loading, error, data } = useQuery(meQuery);
  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return (
      <div className="App">
        <h2>Loading...</h2>
      </div>
    );
  }
  if (data) {
    console.log('user is', data.me);
    // if (data.user.length > 0) {
    if (!$.isEmptyObject(data.me)) {
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
                <Typography>
                  change profile image
                </Typography>
                <Avatar
                  alt="Person"
                  className={classes.avatar}
                  src={data.me.profileImage}
                />
              </Paper>
            </Grid>
            <Grid>
              <Paper
                className={classes.paper}
              >
                <form
                  autoComplete="off"
                  className={classes.root}
                  noValidate
                >
                  <TextField
                    helperText="First Name"
                    id="standard-basic"
                    label={data.me.first}
                    onChange={handleChange}
                    onKeyDown={handleChange}
                  />
                  <TextField
                    helperText="Last Name"
                    id="standard-basic"
                    label={data.me.last}
                  />
                </form>
              </Paper>
            </Grid>
            <Grid>
              <form
                autoComplete="off"
                className={classes.root}
                noValidate
              >
                <TextField
                  helperText="Zip Code to help you find groups"
                  id="standard-basic"
                  label={data.me.zipCode}
                />
              </form>
            </Grid>
            <Grid>
              <form
                autoComplete="off"
                className={classes.root}
                noValidate
              >
                <TextField
                  helperText="Initials"
                  id="standard-basic"
                  label={data.me.initials}
                />
              </form>
            </Grid>
          </Grid>
        </div>
      );
    } // data-binding logic
  }
};

export default EditMyProfile;
