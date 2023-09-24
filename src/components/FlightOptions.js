import * as React from "react";

import { Box, Grid } from "@mui/material";
import FlightOptionListItem from "./FlightOptionListItem";

export default function FlightOptions() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} margin={0}>
          <FlightOptionListItem />
          <FlightOptionListItem />
          <FlightOptionListItem />
          <FlightOptionListItem />
          <FlightOptionListItem />
        </Grid>
      </Box>
    </>
  );
}
