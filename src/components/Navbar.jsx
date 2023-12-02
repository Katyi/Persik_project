import styled from '@emotion/styled';
import { ArrowBack, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Link, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Myimage from '../images/Pers.jpg'

const StyledToolbar = styled(Toolbar)({
  width: '100vw',
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: '10vh',
  padding: 0,
  margin:0,
});

const Icons = styled(Box)(() => ({
  alignItems: "center",
  gap: "20px",
  display: "flex",
}));

const UserBox = styled(Box)(() => ({
  width:"40%",
  display: "flex",
  alignItems: "center",
  gap: "5px",
}));

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname.split("/")[2];
  return (
    <AppBar position='sticky'>
      {/* in screens bigger */}
      <StyledToolbar>
        <Icons xs={{display: { xs: "none", sm: "block" }}}>
          <Avatar sx={{ width: 60, height: 60, display: { xs: "none", sm: "block" } }} src={Myimage} />
          <Typography
            variant='h4'
            fontFamily='Comic Sans MS,Comic Sans,fantasy'
            fontWeight={900}
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
              fontFamily: { md: 'Comic Sans MS,Comic Sans,fantasy', sm: "FuturaPT" },
              fontSize: { md: 25, sm: 25 },
              fontWeight: { md: 400, sm: 400 },
              display: { xs: "none", sm: "block" },
              textDecoration: "none",
            }}
            onClick={() => navigate('/Persik_project')}
          >
            Back to Main Page
          </Link>
        }
        {/* in smaller screens */}
        {/* only in aboit and album pages */}
        <UserBox mt={3} mb={3}>
          {(pathName === 'about' || pathName === 'album')
            && <Link
              component="button"
              variant="body2"
              sx={{
                color: '#000',
                display: { xs: "block", sm: "none" }
              }}
              onClick={() => navigate('/Persik_project')}
            >
              <ArrowBack />
            </Link>
          }
          <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        </UserBox>
        <Typography
            // width={'47%'}
            textAlign='right'
            variant='span'
            fontSize={30}
            fontWeight={900}
            fontFamily={{ md: 'Comic Sans MS,Comic Sans,fantasy', xs: "FuturaPT" }}
            sx={{ display: { xs: "block", sm: "none" } }}
            pr={"3%"}
          >
            My Cat Persik
          </Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;