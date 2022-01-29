import { Search as SearchIcon } from "@mui/icons-material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import {
  AppBar,
  Avatar,
  Box, Button, Divider,
  IconButton,
  InputAdornment, TextField, Toolbar, Typography
} from "@mui/material";
import React from 'react';
import Logo from "../Logo";

export const AppNavbar = () => {
    return(
  <Box sx={{ zIndex: 9999, flexGrow: 1, height: "64px", maxWidth:0 }}>
    <AppBar sx={{ backgroundColor: "background.paper" }}>
      <Toolbar sx={{ width:"75%", height: 64, alignSelf:"center" }}>
      <Button  href='#'>
      <Logo />
        </Button>
        <div
    style={{
        position: 'absolute', 
        left: '50%', 
        top: '70%',
        transform: 'translate(-50%, -50%)',
        width: '30%'
    }}
>
        <TextField
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search anything"
          
          id="search"
          type="search"
          
          size="small"
        />
      </div>
      <Box sx={{ flexGrow: 1 }} />
      <Button variant="text" >
      <Typography style={{textTransform:"none"}}>Settings</Typography>
      </Button>
      <Button variant="text" endIcon={<ArrowDropDownIcon />}>
      <Typography style={{textTransform:"none"}}>Help</Typography></Button>
      <Divider variant='middle' orientation='vertical' flexItem />
      <IconButton color="primary" size="large">
                          <NotificationsIcon />
            
          </IconButton>
          

        <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          sx={{
            cursor: 'pointer',
            width: 32,
            height: 32,
            fontSize: "inherit",
            backgroundColor: "primary.main"
          }}
          
        />
        
      </Box>
                </Toolbar>
    </AppBar>
  </Box>
    );
};
