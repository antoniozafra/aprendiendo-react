import { Box, Toolbar } from '@mui/material'
import React from 'react'
// import { NavBar } from '../components/NavBar';
import { SideBar, NavBar } from '../components';

const drawerWidth = 280;


export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>

        <NavBar drawerWidth={drawerWidth}/>

        <SideBar drawerWidth={drawerWidth}/>

        {/* {Sidebar drawerWidth} */}

        <Box component='main' sx={{flexGrow: 1, p: 3}}>

        <Toolbar/>
        {children}
        </Box>


    </Box>
    )
}
