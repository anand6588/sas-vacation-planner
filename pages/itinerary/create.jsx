import {
  Box,
  Button,
  CardContent,
  Grid,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FlightOptions from "../../src/components/FlightOptions";
import SelectedTripItinerary from "../../src/components/TripItinerary";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ItineraryTitle from "../../src/components/ItineraryTitle";
import dayjs from "dayjs";

const ContainerBox = styled(Box)(({ theme }) => ({
  backgroundColor: "primary.dark",
  border: "solid 1px #ddd",
  padding: "10px",
}));

const findCheapFilght = (flights) => {
  return [
    flights.reduce((cheapFlight, currentFlight) => {
      if (!cheapFlight || cheapFlight.cost > currentFlight.cost)
        return currentFlight;
      else return cheapFlight;
    }, null),
  ][0];
};

export default function ItineraryDetails({}) {
  const router = useRouter();
  const [departureDate, setDepartureDate] = useState(null);
  const [outboundFlights, setOutboundFlights] = useState([]);
  const [inboundFlights, setInboundFlights] = useState([]);
  const [selectedOutboundFlight, setSelectedOutboundFlight] = useState(null);
  const [selectedInboundFlight, setSelectedInboundFlight] = useState(null);

  const [flightQueryParam, setFlightQueryParam] = useState(null);

  useEffect(() => {
    setFlightQueryParam(router.query);
  }, [router.query]);

  useEffect(() => {
    fetch("/api/flights/search?" + new URLSearchParams(flightQueryParam))
      .then((res) => res.json())
      .then((data) => {
        setOutboundFlights(data?.outboundFlights);
        setInboundFlights(data?.inboundFlights);

        setSelectedOutboundFlight(findCheapFilght(data?.outboundFlights));
        setSelectedInboundFlight(findCheapFilght(data?.inboundFlights));
      });
  }, [flightQueryParam]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <ContainerBox>
          <CardContent>
            <Typography gutterBottom variant="h5" component="span">
              Departure Date:
            </Typography>
            <DatePicker
              value={dayjs(departureDate || flightQueryParam?.date)}
              sx={{ mt: "-10px", ml: "5px" }}
            />
            {/* flight options starts here */}
            <FlightOptions
              options={outboundFlights}
              selectedFlight={selectedOutboundFlight}
              setSelectedFlight={setSelectedOutboundFlight}
              title="Flights From Stockholm to Dubai (Outbound)"
            />
            <FlightOptions
              options={inboundFlights}
              selectedFlight={selectedInboundFlight}
              setSelectedFlight={setSelectedInboundFlight}
              title="Flights From Dubai to Stockholm (Inbound)"
            />
            {/* flight options ends here */}
          </CardContent>
        </ContainerBox>
      </Grid>

      <Grid item xs={4}>
        <ContainerBox>
          <Stack alignContent={"center"}>
            <ItineraryTitle title="Travel Information" />
            <CardContent>
              <SelectedTripItinerary
                outboundFlight={selectedOutboundFlight}
                inboundFlight={selectedInboundFlight}
                days={flightQueryParam?.days}
              />
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
