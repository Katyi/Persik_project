import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      height={'100vh'}
    bgcolor={'#F5F3F1'}
    >
      <Stack
        direction={"column"}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Typography
          fontSize={{xs: 20, sm: 25, md: 40}}
          fontWeight={{ xs: 700, md: 500 }}
          fontFamily={{ md: 'Comic Sans MS,Comic Sans,fantasy', sm: "FuturaPT" }}
          mt={{ md: 35, sm: 25, xs: 20 }}
          ml={{ xs: 3, md: 12 }}
          mr={{ xs: 3, md: 12 }}
        >
          This application is made about my lovely cat Persik.<br />
          My contacts: egorova.aleksandra@gmail.com
        </Typography>
      </Stack>
    </Box>
  );
};

export default About;