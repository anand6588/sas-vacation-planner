import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import cardBg from "../images/card-img.jpg";
import Image from "next/image";
import { Grid, Stack } from "@mui/material";

const CardImage = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

export default function PackageCard() {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: "5px", border: "solid 1px #eee" }}>
      <CardMedia>
        <CardImage src={cardBg} />
      </CardMedia>
      <CardContent>
        <Typography variant="h6">Dubai</Typography>
        <Typography variant="body2" color="text.secondary">
          This is a perfect party dish and a fun meal to cook together with your
          guests.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid container spacing={6}>
          <Grid item xs>
            <Typography variant="button">7 days</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="button">12500 Kr</Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
