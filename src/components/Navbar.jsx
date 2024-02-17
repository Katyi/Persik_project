import styled from '@emotion/styled';
import { ArrowBack, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Link, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Myimage from '../images/Pers.jpg';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: '10px',
  paddingBottom: '10px'
});

const Icons = styled(Box)(() => ({
  alignItems: "center",
  gap: "20px",
  display: "flex",
}));

const UserBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];
  return (
    <AppBar position='sticky'>
      {/* in screens bigger */}
      <StyledToolbar>
        <Icons xs={{display: { xs: "none", sm: "block" }}}>
          <Avatar sx={{ width: 60, height: 60, display: { xs: "none", sm: "block" } }} src={Myimage} />
          <Typography
            variant='h4'
            fontFamily='Comic Neue, Roboto'
            fontWeight={700}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            My Cat Persik
          </Typography>
        </Icons>
        {/* only in aboit and album pages */}
        {(pathName === 'about' || pathName === 'album' )
          && <Link
            component="button"
            variant="body2"
            sx={{
              color: '#000',
              fontFamily: { md: 'Comic Neue , Roboto', sm: "Roboto" },
              fontSize: { md: 25, sm: 25 },
              fontWeight: { md: 400, sm: 400 },
              display: { xs: "none", sm: "block" },
              textDecoration: "none",
            }}
            onClick={() => navigate('/')}
          >
            Back to Main Page
          </Link>
        }
        {/* in smaller screens */}
        {/* only in aboit and album pages */}
        <UserBox sx={{ display: { xs: "flex", sm: "none" }, width: "25%" }}>
          {(pathName === 'about' || pathName === 'album') &&
            <Link
              component="button"
              edge="start"
              variant="body2"
              sx={{
                color: '#000',
                display: { xs: "block", sm: "none" }
              }}
              onClick={() => navigate('/')}
            >
              <ArrowBack/>
            </Link>
          }
          <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        </UserBox>
        <Typography
            width={'75%'}
            textAlign='right'
            variant='span'
            fontSize={30}
            fontWeight={900}
            fontFamily={{ md: 'Comic Neue , Roboto', xs: "Roboto" }}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            My Cat Persik
          </Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;