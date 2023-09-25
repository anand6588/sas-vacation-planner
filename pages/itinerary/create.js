import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FlightOptions from "../../src/components/FlightOptions";
import SelectedTripItinerary from "../../src/components/TripItinerary";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ContainerBox = styled(Box)(({ theme }) => ({
  backgroundColor: "primary.dark",
  border: "solid 1px #ddd",
  padding: "10px",
}));

export default function ItineraryDetails({}) {
  const router = useRouter();
  const departure = router.query.departureFrom;
  const destination = router.query.location;
  const packageId = router.query.id;
  const days = router.query.days;
  const queryDate = router.query.date;

  const [departureDate, setDepartureDate] = useState(null);
  const [outboundFlights, setOutboundFlights] = useState([]);
  const [inboundFlights, setInboundFlights] = useState([]);

  useEffect(() => {
    console.log("queryDate::::", queryDate);
    console.log("departureDate::::", departureDate);
    if (departure && destination && days) {
      fetch(
        "/api/flights/search?" +
          new URLSearchParams({
            departure,
            destination,
            days,
            departureDate: departureDate || queryDate,
          })
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("data:::::", data);
        });
    }
  }, [router.query, departureDate]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <ContainerBox>
          <CardContent>
            <Typography gutterBottom variant="h5" component="span">
              Choose Date:
            </Typography>

            <DatePicker />

            {/* flight options starts here */}
            <Paper elevation={3}>
              <Card sx={{ mt: 3 }}>
                <CardHeader subheader="Flights From Stockholm to Dubai (Outbound)" />
                <CardContent>
                  <FlightOptions />
                </CardContent>
              </Card>
            </Paper>

            <Paper elevation={3}>
              <Card sx={{ mt: 3 }}>
                <CardHeader subheader="Flights From Dubai to Stockholm (Inbound)" />
                <CardContent>
                  <FlightOptions />
                </CardContent>
              </Card>
            </Paper>
            {/* flight options ends here */}
          </CardContent>
        </ContainerBox>
      </Grid>

      <Grid item xs={4}>
        <ContainerBox>
          <Stack alignContent={"center"}>
            <Typography
              variant="h6"
              component={"div"}
              color="text.secondary"
              align={"left"}
              sx={{ m: "10px 0 -40px 0" }}
            >
              Travel Information
            </Typography>

            {/* <CardHeader subheader="Trip Itinerary"></CardHeader> */}
            <CardContent>
              <SelectedTripItinerary />
            </CardContent>

            <Button variant="contained" size="medium">
              Book This Trip
            </Button>
          </Stack>
        </ContainerBox>
      </Grid>
    </Grid>
  );
}
