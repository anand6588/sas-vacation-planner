import { Button, CardContent, Grid, Stack, Typography } from "@mui/material";
import FlightsList from "../../src/components/FlightsList";
import TravelItinerary from "../../src/components/TravelItinerary";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import NoResultMessage from "../../src/components/NoResultMessage";
import DatepickerWithLabel from "../../src/components/DatepickerWithLabel";
import ItineraryCard, {
  ContainerBox,
} from "../../src/components/ItineraryCard";
import FlightSelectButton from "../../src/components/FlightSelectButton";

const findCheapFilght = (flights) => {
  return [
    flights?.reduce((cheapFlight, currentFlight) => {
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

  const handleDateChange = (e) => {
    router.query = {
      ...router.query,
      date: e.format("DD-MMM-YYYY"),
    };
    router.push(router);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <ContainerBox>
          <CardContent>
            <DatepickerWithLabel
              label="Departure Date"
              value={dayjs(departureDate || flightQueryParam?.date)}
              handleDateChange={handleDateChange}
            />
            {!outboundFlights || !inboundFlights ? (
              <NoResultMessage>
                No flights operating on this date from{" "}
                {flightQueryParam?.departureFrom} to{" "}
                {flightQueryParam?.location}
                !
                <br />
                <br />
                (Note for Reviewer: Only flights to Dubai at Oct 1, 2023 has
                flight data!)
              </NoResultMessage>
            ) : (
              <>
                <FlightsList
                  options={outboundFlights}
                  selectedFlight={selectedOutboundFlight}
                  setSelectedFlight={setSelectedOutboundFlight}
                  title="Flights From Stockholm to Dubai (Outbound)"
                />
                <FlightsList
                  options={inboundFlights}
                  selectedFlight={selectedInboundFlight}
                  setSelectedFlight={setSelectedInboundFlight}
                  title="Flights From Dubai to Stockholm (Return)"
                />
              </>
            )}
          </CardContent>
        </ContainerBox>
      </Grid>

      <ItineraryCard title="Travel Information">
        <CardContent>
          <TravelItinerary
            outboundFlight={selectedOutboundFlight}
            inboundFlight={selectedInboundFlight}
            days={flightQueryParam?.days}
          />
        </CardContent>

        {(inboundFlights || outboundFlights) && (
          <FlightSelectButton
            btnCaption={"Book This Trip"}
            value={
              selectedOutboundFlight?.cost + selectedInboundFlight?.cost + "kr"
            }
          />
        )}
      </ItineraryCard>
    </Grid>
  );
}
