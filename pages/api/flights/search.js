import dayjs from "dayjs";
import allFlights from "../../../src/data/flights.json";

const SearchFlights = (req, res) => {
  const departure = req?.query?.departureFrom || "";
  const destination = req?.query?.location || "";
  const days = req?.query?.days || "";
  const departureDate = req?.query?.date || "";
  const arrivalDate = dayjs(departureDate)
    .add(days, "day")
    .format("DD-MMM-YYYY");

  const outboundFlights = allFlights.filter(
    (flight) =>
      flight.date == departureDate &&
      flight.departure == departure &&
      flight.destination == destination
  );

  const inboundFlights = allFlights.filter(
    (flight) =>
      flight.date == arrivalDate &&
      flight.departure == destination &&
      flight.destination == departure
  );

  res.status(200).json({ outboundFlights, inboundFlights });
};

export default SearchFlights;
