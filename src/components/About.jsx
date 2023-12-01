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
        pt={{ md: 15, sm: 25, xs: 20 }}
        ml={{ xs: 3, md: 12 }}
        mr={{ xs: 3, md: 12 }}

      >
        <Typography
          fontSize={{xs: 20, sm: 35, md: 40}}
          fontWeight={{ xs: 700, md: 500 }}
          fontFamily={{ md: 'Comic Sans MS,Comic Sans,fantasy', sm: "FuturaPT" }}
        >
          This application is made about my lovely cat Persik.<br />
          My contacts: egorova.aleksandra@gmail.com
        </Typography>
        <Box
          display={{md: "block", xs: "none"}}
        >
          <CardMedia
            component="img"
            src="https://static.tildacdn.com/tild6232-3335-4532-b630-316437633033/Layer_1.svg"
            alt="Cat's Pic 1"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default About;