import { styled } from '@mui/material';
import React from 'react';
import { AppContent } from './AppContent';
import { AppNavbar } from './AppNavbar';

const AppLayoutRoot = styled('div')(
    ({ theme }) => ({
      backgroundColor: theme.palette.background.default,
      display: 'flex',
      height: '100%',
      overflow: 'hidden',
      width: '100%'
    })
  );

  const AppLayoutWrapper = styled('div')( 
    ({ theme }) => ({
      display: 'flex',
      flex: '1 1 auto',
      overflow: 'hidden',
      paddingTop: 64,
      paddingLeft: 64,
      [theme.breakpoints.down('lg')]: {
        paddingLeft: 64
      },
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0
      },
      transition: "0.3s all ease"
      
    })
  );
  
  const AppLayoutContainer = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  });
  
  const AppLayoutContent = styled('div')({
    flex: '1 1 auto',
    height: '100%',
    overflow: 'hidden',
    justifyContent: 'left'
  });
  
  

  const AppSidebar = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    marginTop: 16,
    height:"800px",
    maxWidth: "150px",
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    
  }));
  

const AppLayout = () => {
    return(
        <AppLayoutRoot>
      <AppNavbar />
      <AppSidebar />
      <AppLayoutWrapper >
        <AppLayoutContainer>
          <AppLayoutContent>
            <AppContent />
            
          </AppLayoutContent>
        </AppLayoutContainer>
      </AppLayoutWrapper>
    </AppLayoutRoot>
    );
}

export default AppLayout;