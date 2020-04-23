/* eslint no-undef: 0 */
import React from 'react';
import $ from 'jquery';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, Typography, Button, FormControl,
  InputLabel, Select, MenuItem } from '@material-ui/core';
// Apollo
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import * as queries from '../../graphql/queries';
// import * as mutations from '../../graphql/mutations';

const meQuery = gql(queries.users.getMe.graphql);
const groupsQuery = gql(queries.groups.getGroups.graphql);
// const updateUserMutation = gql(mutations.users.updateUser.graphql);

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const JoinGroup = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // DATA BINDING
  const getMe = useQuery(meQuery);
  const getGroups = useQuery(groupsQuery);
  // const [updateUser] = useMutation(updateUserMutation);

  if (getMe.loading || getGroups.loading) return <div>Loading</div>;
  if (getMe.error || getGroups.error) return <div>Error: {JSON.stringify(error)}</div>;

  if (getMe.data && getGroups.data) {
    if (!$.isEmptyObject(getMe.data.me) &&
      !$.isEmptyObject(getGroups.data.getGroupSuggestions)) {
      const groups = getGroups.data.getGroupSuggestions;
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
                  {getMe.data.me.first} to join group
                </Typography>
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
                  <FormControl
                    className={classes.formControl}
                    variant="filled"
                  >
                    <InputLabel id="select-group-label">Group</InputLabel>
                    <Select
                      id="select-group"
                      labelId="select-group-label"
                      onChange={handleChange}
                      value={age}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>

                      {groups.map((group, index) =>
                        <MenuItem
                          key={index}
                          value={index}
                        >
                          {group.name}
                        </MenuItem>
                      )}

                    </Select>
                  </FormControl>
                  <Button
                    color="secondary"
                    variant="contained"
                  >
                    looks good
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </div>
      );
    } // data.me empty object check
  } // data check
}

export default JoinGroup;
