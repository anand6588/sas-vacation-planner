import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import TripItinerary from "../../src/components/PackageItinerary";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FlightOptions from "../../src/components/FlightOptions";
import SelectedTripItinerary from "../../src/components/TripItinerary";

const ContainerBox = styled(Box)(({ theme }) => ({
  backgroundColor: "primary.dark",
  border: "solid 1px #ddd",
  padding: "10px",
}));

export default function ItineraryDetails({}) {
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
