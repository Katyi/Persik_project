import styled from '@emotion/styled';
import { ArrowBack, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Link, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Myimage from '../images/Pers.jpg'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  padding: '3',
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
  const pathName = window.location.pathname;
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Icons>
          <Avatar sx={{ width: 100, height: 100, mt: 2, mb: 2, display: { xs: "none", sm: "block" } }} src={Myimage} />
          <Typography
            variant='h3'
            fontFamily='Comic Sans MS,Comic Sans,fantasy'
            fontWeight={900}
            p={3}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            My Cat Persik
          </Typography>
        </Icons>

        {(pathName === '/Persik_project/about' || pathName === '/Persik_project/album' )
          && <Link
            component="button"
            variant="body2"
            sx={{
              color: '#000',
              fontFamily: { md: 'Comic Sans MS,Comic Sans,fantasy', sm: "FuturaPT" },
              fontSize: { md: 25, sm: 25 },
              fontWeight: { md: 400, sm: 400 },
              display: { xs: "none", sm: "block" }
            }}
            onClick={() => navigate('/Persik_project')}
            // onClick={() => navigate('/Persik_project/container')}
          >
            Back to Main Page
          </Link>
        }
        
        <UserBox position={'fixed'} mt={3} mb={3}>
          {(pathName === '/Persik_project/about' || pathName === '/Persik_project/album')
            && <Link
              component="button"
              variant="body2"
              sx={{
                color: '#000',
                display: { xs: "flex", md: "none" }
              }}
              // onClick={() => navigate('/Persik_project/container')}
              onClick={() => navigate('/Persik_project')}
            >
              <ArrowBack />
            </Link>
          }
          <Pets sx={{ display: { xs: "flex", sm: "none" } }} />
        </UserBox>
        <Typography
            variant='span'
            fontSize={30}
            fontWeight={900}
            fontFamily={{ md: 'Comic Sans MS,Comic Sans,fantasy', xs: "FuturaPT" }}
            sx={{ display: { xs: "block", sm: "none" } }}
            pl={0}
          >
            My Cat Persik
          </Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;