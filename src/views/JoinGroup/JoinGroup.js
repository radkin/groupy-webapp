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
// const groupsQuery = gql(queries.groups.getGroups.graphql);
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

const CreateGroup = () => {
  const classes = useStyles();

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // DATA BINDING
  const { loading, error, data } = useQuery(meQuery);
  // const [updateUser] = useMutation(updateUserMutation);
  // const [getGroups] = useQuery(getGroups);

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
                  {data.me.first} to join group
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
                    <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                    <Select
                      id="demo-simple-select-filled"
                      labelId="demo-simple-select-filled-label"
                      onChange={handleChange}
                      value={age}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>

                  { /*
                  <TextField
                    helperText="Name of Group"
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
                  */ }

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

export default CreateGroup;
