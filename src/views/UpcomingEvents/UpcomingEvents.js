/* eslint no-undef: 0 */
import React from 'react';
import $ from 'jquery';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
// Apollo
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import * as queries from '../../graphql/queries';

const meQuery = gql(queries.users.getMe.graphql);

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

const UpcomingEvents = () => {
  const classes = useStyles();

  // DATA BINDING
  const { loading, error, data } = useQuery(meQuery);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  if (data) {
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
                  Upcoming Events
                </Typography>
                <Button
                  color="secondary"
                  variant="contained"
                >
                  + Event
                </Button>
              </Paper>
            </Grid>
            <Grid>
              <Paper
                className={classes.paper}
              >
                Events go here! yippie
              </Paper>
            </Grid>
          </Grid>
        </div>
      );
    } // data.me empty object check
  } // data check
}

export default UpcomingEvents;
