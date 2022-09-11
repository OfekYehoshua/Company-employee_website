import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import CakeIcon from '@mui/icons-material/Cake';

import './style.css'



export default function FolderList() {
  return (
    
    <List sx={{ bgcolor: 'background.paper' }} className='folderListContainer'>
      <h1>choose event </h1>
      <ListItem className='folder-list'>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Happy Hour" secondary="Jan 9, 2023" />
      </ListItem>
      <ListItem className='folder-list'>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Meeting night" secondary="Jan 7, 2023" />
      </ListItem>
      <ListItem className='folder-list'>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Company Vacation" secondary="July 20, 2023" />
      </ListItem>
      <ListItem className='folder-list'>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Family vacation" secondary="Jan 9, 2023" />
      </ListItem>
      <ListItem className='folder-list'>
        <ListItemAvatar>
          <Avatar>
            <CakeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Birthday party" secondary="Jan 14, 2023" />
      </ListItem>
    </List>
   
  );
}