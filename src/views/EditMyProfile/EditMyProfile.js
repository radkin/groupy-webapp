/* eslint no-undef: 0 */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import $ from 'jquery';
import { Grid, TextField } from '@material-ui/core';
// import { Notifications, Password } from './components';
// Apollo
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import * as queries from '../../graphql/queries';

const meQuery = gql(queries.users.getMe.graphql);

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
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
            spacing={4}
          >
            <Grid>
              <form
                autoComplete="off"
                className={classes.root}
                noValidate
              >
                <TextField id="standard-basic" label="First Name" />
                <TextField id="standard-basic" label="Last Name" />
              </form>
            </Grid>
            <Grid>
              <form
                autoComplete="off"
                className={classes.root}
                noValidate
              >
                <TextField
                  helperText="to help you find groups"
                  id="standard-basic"
                  label="Zip Code" 
                />
                <TextField id="standard-basic" label="Initials" />
              </form>
            </Grid>
          </Grid>
        </div>
      );
    } // data-binding logic
  }
};

export default EditMyProfile;
