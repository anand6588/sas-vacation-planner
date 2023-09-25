import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import cardBg from "../images/card-img.jpg";
import Image from "next/image";
import { Grid } from "@mui/material";
import Link from "next/link";

const CardImage = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const CardContainer = styled(Card)(({ theme }) => ({
  width: 345,
  borderRadius: "5px",
  border: "solid 1px #eee",
}));

const ButtonText = ({ children }) => (
  <Typography variant="button">{children}</Typography>
);

const Quote = ({ children }) => (
  <Typography variant="body2" color="text.secondary">
    {children}
  </Typography>
);

const Destination = ({ children }) => (
  <Typography variant="h6">{children}</Typography>
);

export default function PackageCard({ packageDetail }) {
  return (
    <Link href={`/packages/` + packageDetail.id}>
      <CardContainer>
        <CardMedia>
          <CardImage src={cardBg} alt="quote" />
        </CardMedia>
        <CardContent>
          <Destination>{packageDetail.destination}</Destination>
          <Quote>{packageDetail.quote}</Quote>
        </CardContent>
        <CardActions disableSpacing>
          <Grid container spacing={6}>
            <Grid item xs>
              <ButtonText>{packageDetail.days} days</ButtonText>
            </Grid>
            <Grid item xs={4}>
              <ButtonText>{packageDetail.priceStartFrom} kr</ButtonText>
            </Grid>
          </Grid>
        </CardActions>
      </CardContainer>
    </Link>
  );
}
