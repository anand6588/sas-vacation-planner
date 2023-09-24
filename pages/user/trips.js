import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Grid,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TripItinerary from "../../src/components/TripItinerary";
import BookedTripListItem from "../../src/components/BookedTripListItem";

const Item = styled(Grid)(({ theme }) => ({
  border: "solid 1px #ccc",
  padding: "15px",
  margin: "5px 0 5px -1px",
}));

export default function Trips({}) {
  return (
    <>
      <Card variant="outlined">
        <CardHeader title="Upcoming Trips"></CardHeader>
        <CardContent>
          <Typography variant="body2" component="div">
            You have no upcoming trips!
          </Typography>

          <BookedTripListItem />
          <BookedTripListItem />
          <BookedTripListItem />
          <BookedTripListItem />
        </CardContent>
      </Card>
    </>
  );
}
