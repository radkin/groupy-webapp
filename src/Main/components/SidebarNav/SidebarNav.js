/* eslint no-undef: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemIcon }  from '@material-ui/core';
// Material-ui Icons
import AccountIcon from '@material-ui/icons/AccountCircleRounded';
import FamilyIcon from '@material-ui/icons/Group';
import EditIcon from '@material-ui/icons/Edit';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import BuildIcon from '@material-ui/icons/Build';

const SidebarNav = () => {
  return (
    <List>
      { /* VIEW PROFILE*/}
      <ListItem>
        <ListItemIcon>
          <AccountIcon />
        </ListItemIcon>
        <ListItemText primary="View my profile" />
      </ListItem>
      { /* VIEW FAMILY */}
      <ListItem>
        <ListItemIcon>
          <FamilyIcon />
        </ListItemIcon>
        <ListItemText primary="View my family" />
      </ListItem>
      { /* CREATE GROUP */}
      <ListItem
        component={Link}
        to="/creategroup"
      >
        <ListItemIcon>
          <GroupAddIcon />
        </ListItemIcon>
        <ListItemText primary="Create group" />
      </ListItem>
      { /* JOIN GROUP */}
      <ListItem
        component={Link}
        to="/joingroup"
      >
        <ListItemIcon>
          <PeopleOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Join group" />
      </ListItem>
      { /* EDIT PROFILE */}
      <ListItem
        component={Link}
        to="/editmyprofile"
      >
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText primary="Edit my profile" />
      </ListItem>
      { /* MESSAGES */}
      <ListItem>
        <ListItemIcon>
          <NotificationsIcon />
        </ListItemIcon>
        <ListItemText primary="Messages" />
      </ListItem>
      { /* SETUP */}
      <ListItem
        component={Link}
        to="/setup"
      >
        <ListItemIcon>
          <BuildIcon />
        </ListItemIcon>
        <ListItemText primary="Setup" />
      </ListItem>
      { /* SIGN OUT */}
      <ListItem>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Sign out" />
      </ListItem>
      { /* END OF LIST ITEMS */}
    </List>
  );
};

export default SidebarNav;
