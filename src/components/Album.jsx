import React from "react";
import imagesList from "../imagesList";
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Stack, Typography } from "@mui/material";
import { Favorite, FavoriteBorder, Share } from "@mui/icons-material";

const Album = () => {
  return (
    <Box bgcolor={'#F5F3F1'} direction={'row'}>
      <Stack width='100%'
        alignItems={'center'} justifyContent={'center'}
        pt={3}
      >
      {imagesList.map((item) =>
        <Card key={item.id} sx={{margin:2}} >
          <CardHeader subheader={item.date}/>
          <CardMedia
            // flex={1}
            component="img"
            width={600}
            height={600}
            src={require("../images/" + item.title+ '.jpg')}
            alt="Images"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {item.text}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
        )}
        <Box mt={10} >
          <a href="#top" style={{
            color: "#ff8562",
            textDecoration: "none",
            fontSize: 20,
            fontWeight: 700,
            }}
          >
            SCROLL UP
          </a>
        </Box>
      </Stack>
    </Box>
  );
};

export default Album;