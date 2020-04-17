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

const SidebarNav = () => {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <AccountIcon />
        </ListItemIcon>
        <ListItemText primary="View my profile" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <FamilyIcon />
        </ListItemIcon>
        <ListItemText primary="View my family" />
      </ListItem>
      <ListItem
        component={Link}
        to="/editmyprofile"
      >
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText primary="Edit my profile" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <NotificationsIcon />
        </ListItemIcon>
        <ListItemText primary="Messages" />
      </ListItem>
      <ListItem
        component={Link}
        to="/setup"
      >
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Setup" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Sign out" />
      </ListItem>
    </List>
  );
};

export default SidebarNav;
