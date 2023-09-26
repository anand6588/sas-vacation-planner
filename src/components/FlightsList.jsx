import * as React from "react";

import { Box, Card, CardContent, CardHeader, Grid, Paper } from "@mui/material";
import FlightListItem from "./FlightListItem";

export default function FlightsList({
  title,
  options,
  selectedFlight,
  setSelectedFlight,
}) {
  return (
    <Paper elevation={3}>
      <Card sx={{ mt: 3 }}>
        <CardHeader subheader={title} />
        <CardContent>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} margin={0}>
              {options?.map((flightDetails, i) => (
                <FlightListItem
                  details={flightDetails}
                  selectedFlight={selectedFlight}
                  setSelectedFlight={setSelectedFlight}
                  key={i}
                />
              ))}
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
}
