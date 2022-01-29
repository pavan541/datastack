import { styled } from '@mui/material';
import React from "react";


const SideDiv = styled("div")(({ theme }) => ({
    height:"800px",
    width: "150px",
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    background: "theme.palette.primary"
  }));

export const AppSidebar = () => {
    return(
        <SideDiv />
    );
}