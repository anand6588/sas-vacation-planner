import * as React from "react";
import { Button, Grid, Stack, Typography, styled } from "@mui/material";
import TripItinerary from "./TripItinerary";

const Item = styled(Grid)(({ theme }) => ({
  border: "solid 1px #ccc",
  padding: "15px",
  margin: "5px 0 5px -1px",
}));

export default function BookedTripListItem({}) {
  return (
    <Grid container spacing={0}>
      <Item item xs={7}>
        <Typography variant="h6" color={"text.secondary"}>
          Stockholm - Dubai - Stockholm
        </Typography>
        <TripItinerary />
      </Item>
      <Item item xs={4}>
        <Stack textAlign={"right"} spacing={1}>
          <Typography
            variant="caption"
            component={"div"}
            color={"text.secondary"}
          >
            Total price of your travel
          </Typography>
          <Typography variant="h6" component={"div"}>
            12500 Kr
          </Typography>
          <Typography
            variant="caption"
            component={"div"}
            color={"text.secondary"}
          >
            Included Flight Tickets
          </Typography>
          <br />
          <Typography
            variant="caption"
            component={"span"}
            color={"text.secondary"}
          >
            Provided by
          </Typography>
          <Typography variant="h6" component={"span"} color={"primary"}>
            SAS Airlines
          </Typography>
          <Button variant="outlined">Cancel Trip</Button>
        </Stack>
      </Item>
    </Grid>
  );
}
