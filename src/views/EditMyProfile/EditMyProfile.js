import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

// import { Notifications, Password } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const EditMyProfile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid>
          item
          md={7}
          xs={12}
        </Grid>
        <Grid>
          item
          md={5}
          xs={12}
        </Grid>
      </Grid>
    </div>
  );
};

export default EditMyProfile;
