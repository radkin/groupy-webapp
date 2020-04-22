/* eslint no-undef: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-static';
// MAterial UI generic
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, CssBaseline, AppBar, Toolbar, Typography, Divider,
  IconButton }  from '@material-ui/core';
// tree shaking material-ui icons is problematic
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// custom imports
import { Profile, SidebarNav } from './components';
import { EditMyProfile as EditMyProfileView } from '../views';
import { Setup as SetupView } from '../views';

const drawerWidth = 240;


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          position="fixed"
        >
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              className={clsx(classes.menuButton, open && classes.hide)}
              color="inherit"
              edge="start"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              noWrap
              variant="h6"
            >
              <img src={require('../assets/groupy_yellow.png')} />
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          classes={{
            paper: classes.drawerPaper,
          }}
          className={classes.drawer}
          open={open}
          variant="persistent"
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            <Divider />
            <Profile />
          </div>
          <Divider />
          <SidebarNav />
          <Divider />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Switch>
            <Route
              component={EditMyProfileView}
              path="/editmyprofile"
            />
            <Route
              component={SetupView}
              path="/setup"
            />
            <Route component={() => (<div>404 Not found </div>)} />
            <Route render={() => <Routes />} />
          </Switch>
          {children}
        </main>
      </div>
    </BrowserRouter>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
