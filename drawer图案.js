
import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';


import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';



export const fuction1 = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="功能1" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="功能2" />
    </ListItem>

  </div>
);

export const fuction2 = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="功能3" />
    </ListItem>
 
  </div>
);