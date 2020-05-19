/* eslint no-undef: 0 */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import $ from 'jquery';
// MAterial UI generic
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Avatar }  from '@material-ui/core';
// Apollo
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import * as queries from '../../../graphql/queries';

const meQuery = gql(queries.users.getMe.graphql);

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
}));

const Profile = () => {

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
    // if (data.user.length > 0) {
    if (!$.isEmptyObject(data.me)) {
      return (
        <div
          className={clsx(classes.root)}
        >
          <Avatar
            alt={data.me.initials}
            className={classes.avatar}
            component={RouterLink}
            src={data.me.profileImage}
            to="/settings"
          />
          <Typography
            className={data.me.initials}
            variant="h4"
          >
            {data.me.phone}
          </Typography>
          <Typography variant="body2">
            {`${data.me.first} ${data.me.last}`}
            <br />
            {data.me.zipCode}
          </Typography>
        </div>
      );
    } // data-binding logic
  }
};

export default Profile;
