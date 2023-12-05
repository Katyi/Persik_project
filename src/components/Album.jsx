import React, { useRef } from "react";
import imagesList from "../imagesList";
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Stack, Typography } from "@mui/material";
import { Favorite, FavoriteBorder, Share } from "@mui/icons-material";

const Album = () => {
  const top = useRef(null);
  const bottom = useRef(null);

  const scrollDownOrTop = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <Box bgcolor={'#F5F3F1'} direction={'row'} width={"100%"} overflow={'hidden'}>
      <Typography ref={top} style={{position:'absolute', top: 0}}></Typography>
      <Typography
        color={"#000000"}
        fontSize={{ xs: 30, sm: 50, md: 50 }}
        fontWeight={{ xs: 700, md: 900 }}
        fontFamily={{md: 'Comic Sans MS,Comic Sans,fantasy', xs: "FuturaPT" }}
        pl={'3%'}
        pt={4}
      >
        Persik's photos
      </Typography>
      <Typography
        color={"#000000"}
        fontSize={20}
        fontWeight={300}
        fontFamily={'FuturaPT'}
        pl={'3%'}
      >
        A small portion of the photos with Persik
      </Typography>
      {/* SCROLL DOWN */}
      <Typography
        sx={{
          position: "absolute",
          right: {xs: "9%", sm:"6%", md: "4%"},
          transform: {xs: 'rotate(90deg) translateX(-120%)', md: 'rotate(90deg) translateX(-110%)'},
          height: "140px",
          fontSize: {xs: 12, md: 16},
          fontWeight: 700,
          color: "#ff8562",
          cursor: "pointer"
        }}
        onClick={() => scrollDownOrTop(bottom)}
      >
        SCROLL DOWN
      </Typography>
      <Stack width='100%' 
        display={'flex'}
        direction={'row'}
        alignItems={'center'}
        flexWrap={'wrap'}
        pt={2}
        pl={'3%'}
        pr={'3%'}
        gap={"2%"}
      >
      {imagesList.map((item) =>
        <Card 
          key={item.id} 
          sx={{
            marginTop: 2,
            width: {xs: '92%', sm:'46%', xl: '30%'}
          }}  
        >
          <CardHeader subheader={item.date}/>
          <CardMedia
            component="img"
            width={400}
            height={350}  
            src={require("../images/" + item.title+ '.jpg')}
            alt="Images"
          />
          <CardContent
            sx={{
              height: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {item.text}
            </Typography>
            <IconButton aria-label="add to favorites">
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
            </IconButton>
          </CardContent>
          {/* <CardActions disableSpacing>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions> */}
        </Card>
        )}
        
      </Stack>
      {/* SCROLL UP */}
      {/* <Box> */}
      <Typography
        mt={5}
        ml={"3%"}
        sx={{
          width: "150px",
          height:"150px",
          fontSize: {xs: 12, md: 16},
          // marginLeft: {xs: "3%", sm:"3%", md: "3%"},
          fontWeight: 700,
          color: "#ff8562",
          transform: 'rotate(270deg)',
          cursor: "pointer",
        }}
        onClick={() => scrollDownOrTop(top)}
      >
        SCROLL UP
      </Typography>
      {/* </Box> */}
      <Typography ref={bottom}></Typography>
    </Box>
  );
};

export default Album;