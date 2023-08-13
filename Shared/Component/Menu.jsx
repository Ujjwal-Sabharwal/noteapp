import * as React from 'react';
// import Button from '@mui/material//Button';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
// import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
// import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import {NavLink} from 'react-router-dom'


export const Menu=()=> {


  return (
    <Stack direction="row" spacing={2}>
      <Paper>
        <MenuList>
          <NavLink to='/'><MenuItem>Home</MenuItem></NavLink>
          <NavLink to='/add'><MenuItem>ADDNOTES</MenuItem></NavLink>
          <NavLink to='/search'><MenuItem>SEARCHNOTES</MenuItem></NavLink>
          <NavLink to='/delete'><MenuItem>DELETE</MenuItem></NavLink>
          <NavLink to='/update'><MenuItem>EDITNOTES</MenuItem></NavLink>
        </MenuList>
      </Paper>
      
    </Stack>
  );
}
