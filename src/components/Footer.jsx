import { Link, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  let navigate = useNavigate();
  const location = useLocation();
  // const pathName1 = location.pathname;
  const pathName = location.pathname.split("/")[2];
  console.log(pathName)

  return (
    <Box bgcolor='#F5F3F1'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1199 200"
        fill="">
        <path
          d="M1198.7 0.58252C587.548 187.543 145.103 153.004 0.275391 112.365V424.825H1198.7V153.764V0.58252Z"
          fill="#faf8f6"
        />
      </svg>
      <Stack direction={{ md: 'row', xs: "column" }}
        bgcolor={'#faf8f6'}
        height={200} 
        mt={-1}
        pl={{ md: 10, xs: 2 }}
        pr={{ md: 10, xs: 2 }}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={{ md: 10, xs: 1 }}
        fontSize={14}
        fontFamily={{ md: 'Comic Sans MS,Comic Sans,fantasy', xs: "FuturaPT" }}
        fontWeight={500}
      >
        <Typography fontWeight={300} >Copyright © 2022, Persik ­­­­­­Cat. All rights reserved.</Typography>
        {(pathName === 'about' || pathName === 'album' ) &&
        <Link 
          color="primary"
          component="button"
            variant="body2"
            sx={{
              color: '#000',
              fontSize: 20,
              textDecoration: "none",
            }}
            onClick={() => navigate('/Persik_project')}
        >
          Home
        </Link>
        }
        {pathName !== 'about' &&
        <Link 
          color="primary"
          component="button"
            variant="body2"
            sx={{
              color: '#000',
              fontSize: 20,
              textDecoration: "none",
            }}
            onClick={() => navigate('/Persik_project/about')}
        >
          About
        </Link>
        }
        {pathName !== 'album' &&
        <Link 
          color="primary"
          component="button"
            variant="body2"
            sx={{
              color: '#000',
              fontSize: 20,
              textDecoration: "none",
            }}
            onClick={() => navigate('/Persik_project/album')}
        >
          Photos
        </Link>
        }
        <Typography
          fontSize={33}
          fontWeight={400}
          color='#ff8562'
        >persik.cat@gmail.com</Typography>
      </Stack>
    </Box>
  )
};


export default Footer;