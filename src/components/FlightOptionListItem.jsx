import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Button, Grid, Stack, Typography } from "@mui/material";
import {
  calculateArrivalTime,
  formatTravelDuration,
} from "../utils/dateTimeUtils";

export default function FlightOptionListItem({
  details,
  selectedFlight,
  setSelectedFlight,
}) {
  return (
    <Grid item xs={3} md={12}>
      <Grid container spacing={2}>
        <Grid item xs={3} md={1}>
          <Avatar
            sx={{
              bgcolor: "#0103bd",
              fontSize: "13px",
              fontStyle: "italic",
            }}
          >
            SAS
          </Avatar>
        </Grid>
        <Grid item xs={6} md={3}>
          <Stack>
            <Typography
              variant="button"
              component={"div"}
              color="text.secondary"
            >
              {details.date}
            </Typography>
            <Typography
              variant="body2"
              component={"div"}
              color="text.secondary"
            >
              {details.time} -{" "}
              {calculateArrivalTime(
                details.date,
                details.time,
                details.duration
              )}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} md={5}>
          <Stack>
            <Typography
              variant="button"
              component={"div"}
              color="text.secondary"
            >
              {details.departure} - {details.destination}
            </Typography>
            <Typography
              variant="body2"
              component={"div"}
              color="text.secondary"
            >
              {formatTravelDuration(details.duration)}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} md={3}>
          <Button
            variant="contained"
            size="medium"
            disabled={details.id === selectedFlight.id}
            onClick={(e) => {
              setSelectedFlight(details);
            }}
          >
            <Stack>
              {details.id === selectedFlight.id && (
                <Typography variant="caption">Selected </Typography>
              )}
              <Typography variant="button">{details.cost}KR </Typography>
            </Stack>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
