import dayjs from "dayjs";
import allFlights from "../../../src/data/flights.json";

const SearchFlights = (req, res) => {
  const departure = req?.query?.departure || "";
  const destination = req?.query?.destination || "";
  const days = req?.query?.days || "";
  const departureDate = req?.query?.departureDate || "";
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

  res.status(200).json({ outbound: outboundFlights, inbound: inboundFlights });
};

export default SearchFlights;
