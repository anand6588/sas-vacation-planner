import {
  Box,
  Button,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import TripItinerary from "../../src/components/PackageItinerary";

const ContainerBox = styled(Box)(({ theme }) => ({
  backgroundColor: "primary.dark",
  border: "solid 1px #ddd",
  padding: "10px",
}));

const dummyContent = `Sed maximus, nunc in vulputate tempus, enim quam tincidunt turpis,
id tempor metus odio nec nisl. Maecenas ut pharetra augue. Donec
ac lorem id ante pharetra finibus. Nulla sit amet massa risus.
Fusce sit amet purus at ipsum condimentum consectetur.
Pellentesque tincidunt tellus nec rutrum pulvinar. Cras at massa
vel nisl imperdiet dignissim. Duis lectus diam, euismod sit amet
nunc eu, tincidunt mollis nulla. Suspendisse tempus, orci
pellentesque porttitor pharetra, felis sem pretium ligula, ut
sollicitudin ipsum velit a erat. Praesent posuere, ipsum id
condimentum vehicula, enim nulla varius ligula, sit amet tristique
est diam id magna. Cras in tellus ut diam facilisis laoreet at id
libero. Phasellus velit enim, porta vel scelerisque vel, ultricies
non ante. Mauris vestibulum quam eu lectus consequat auctor at vel
urna.


Praesent egestas, augue pulvinar molestie ornare, velit sem
feugiat nisi, at mollis nunc ex non urna. Ut condimentum rutrum
diam, at vehicula ex efficitur id. Fusce sit amet ligula a orci
facilisis feugiat ut vel lectus. Cras eu gravida sapien. Nam
dictum fringilla lobortis. Etiam pellentesque metus dui, sed
fringilla mauris commodo at. In pretium, felis quis gravida
ullamcorper, diam ex finibus ex, sed tristique dui risus sit amet
massa.

Maecenas sollicitudin est sed tortor gravida, at tristique ante
facilisis. Nunc eu gravida diam, at posuere est. Sed quam ligula,
tristique vel laoreet non, ultricies in ante. Nam dictum magna
felis, tempus placerat risus semper eu.`;

export default function PackageDetail({}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <ContainerBox>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Long holidays on Dubai
            </Typography>
            <Typography
              sx={{ pb: "30px" }}
              variant="body2"
              color="text.secondary"
            >
              Dubai (7 Days)
            </Typography>
            <Typography variant="body2" sx={{ pb: "30px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              id sapien eget dolor cursus tempus scelerisque eget nulla.
            </Typography>
            <Typography gutterBottom variant="body2" sx={{ lineHeight: 1.8 }}>
              {dummyContent}
            </Typography>
          </CardContent>
          <CardActions>
            <FlightIcon fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              Stockholm - Dubai, Dubai - Stockholm
            </Typography>
          </CardActions>
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
              Starting from 12500Kr
            </Typography>

            {/* <CardHeader subheader="Trip Itinerary"></CardHeader> */}
            <CardContent>
              <TripItinerary />
            </CardContent>

            <Button variant="contained" size="large">
              Start Planning
            </Button>
          </Stack>
        </ContainerBox>
      </Grid>
    </Grid>
  );
}
