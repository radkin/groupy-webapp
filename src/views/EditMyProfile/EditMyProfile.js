/* eslint no-undef: 0 */
import React from 'react';
import $ from 'jquery';
import { makeStyles } from '@material-ui/styles';
import { Grid, TextField, Paper, Avatar, Typography } from '@material-ui/core';
// Apollo
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';

const meQuery = gql(queries.users.getMe.graphql);
const updateUserMutation = gql(mutations.users.updateUser.graphql);

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
  const [updateUser] = useMutation(updateUserMutation);

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
                    onKeyDown={e => {
                      updateUser({
                        variables: {
                          id: data.me.id,
                          first: e.target.value
                        },
                        refetchQueries: [{ query: meQuery }]
                      })
                    }}
                  />
                  <TextField
                    helperText="Last Name"
                    id="standard-basic"
                    label={data.me.last}
                    onKeyDown={e => {
                      updateUser({
                        variables: {
                          id: data.me.id,
                          last: e.target.value
                        },
                        refetchQueries: [{ query: meQuery }]
                      })
                    }}
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
                  onKeyDown={e => {
                    updateUser({
                      variables: {
                        id: data.me.id,
                        zipCode: e.target.value
                      },
                      refetchQueries: [{ query: meQuery }]
                    })
                  }}
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
                  onKeyDown={e => {
                    updateUser({
                      variables: {
                        id: data.me.id,
                        initials: e.target.value
                      },
                      refetchQueries: [{ query: meQuery }]
                    })
                  }}
                />
              </form>
            </Grid>
          </Grid>
        </div>
      );
    } // data.me empty object check
  } // data check
}

export default EditMyProfile;
