import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Grid, Stack, Typography, styled } from "@mui/material";
import {
  calculateArrivalTime,
  formatTravelDuration,
} from "../utils/dateTimeUtils";
import FlightSelectButton from "./FlightSelectButton";

const AirlineAvatar = styled(Avatar)(({ theme }) => ({
  background: "#0103bd",
  fontSize: "13px",
  fontStyle: "italic",
}));

const FlightListHeader = ({ children }) => (
  <Typography variant="button" component={"div"} color="text.secondary">
    {children}
  </Typography>
);
const FlightListSubHeader = ({ children }) => (
  <Typography variant="body2" component={"div"} color="text.secondary">
    {children}
  </Typography>
);

export default function FlightListItem({
  details,
  selectedFlight,
  setSelectedFlight,
}) {
  return (
    <Grid item xs={3} md={12}>
      <Grid container spacing={2}>
        <Grid item xs={3} md={1}>
          <AirlineAvatar>SAS</AirlineAvatar>
        </Grid>
        <Grid item xs={6} md={3}>
          <Stack>
            <FlightListHeader>{details.date}</FlightListHeader>
            <FlightListSubHeader>
              {details.time} -{" "}
              {calculateArrivalTime(
                details.date,
                details.time,
                details.duration
              )}
            </FlightListSubHeader>
          </Stack>
        </Grid>
        <Grid item xs={6} md={5}>
          <Stack>
            <FlightListHeader>
              {details.departure} - {details.destination}
            </FlightListHeader>
            <FlightListSubHeader>
              {formatTravelDuration(details.duration)}
            </FlightListSubHeader>
          </Stack>
        </Grid>
        <Grid item xs={6} md={3}>
          <FlightSelectButton
            disabled={details.id === selectedFlight.id}
            onClickHandler={(e) => {
              setSelectedFlight(details);
            }}
            showCaption={details.id === selectedFlight.id}
            btnCaption="Selected"
            value={details.cost + "KR"}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
