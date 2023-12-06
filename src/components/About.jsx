import React from "react";
import { Box, CardMedia, Stack, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      height={'80vh'}
      bgcolor={'#F5F3F1'}
    >
      <Stack
        direction={"row"}
        alignItems={'center'}
        justifyContent={'center'}
        pt={{ md: 10, sm: 10, xs: 15 }}
        ml={{ xs: 3, md: 5 }}
        mr={{ xs: 3, md: 5 }}
      >
        <Typography
          fontSize={{xs: 20, sm: 22, md: 30}}
          fontWeight={{ xs: 700, md: 500 }}
          fontFamily={{ md: 'Comic Neue , Roboto', xs: "Roboto" }}
        >
          This application is made about my lovely cat Persik.<br />
          My contacts: egorova.aleksandra@gmail.com
        </Typography>
        <Box
          display={{lg: "block", xs: "none"}}
        >
          <CardMedia
            component="img"
            height={300}
            src="https://static.tildacdn.com/tild6232-3335-4532-b630-316437633033/Layer_1.svg"
            alt="Cat's Pic 1"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default About;