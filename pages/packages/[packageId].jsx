import {
  Box,
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import TripItinerary from "../../src/components/PackageItinerary";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import ItineraryCard from "../../src/components/ItineraryCard";

const ContainerBox = styled(Box)(({ theme }) => ({
  backgroundColor: "primary.dark",
  border: "solid 1px #ddd",
  padding: "10px",
}));

const linkToFlightOptions = (packageDetail) =>
  "/packages/flights?date=" +
  packageDetail?.cheapestUpcomingDate +
  "&location=" +
  packageDetail?.destination +
  "&id=" +
  packageDetail?.id +
  "&days=" +
  packageDetail?.days +
  "&departureFrom=" +
  packageDetail?.departureFrom;

const dummyContent = `This is dummy content to fill the page. Sed maximus, nunc in vulputate tempus, enim quam tincidunt turpis,
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
  const router = useRouter();
  const [packageDetail, setPackageObj] = useState([]);

  useEffect(() => {
    fetch("/api/packages/details?id=" + router.query.packageId)
      .then((res) => res.json())
      .then((data) => setPackageObj(data));
  }, [router.query]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <ContainerBox>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {packageDetail?.quote}
            </Typography>
            <Typography
              sx={{ pb: "30px" }}
              variant="body2"
              color="text.secondary"
            >
              {`${packageDetail?.destination} (${packageDetail?.days} Days)`}
            </Typography>
            <Typography variant="body2" sx={{ pb: "30px" }}>
              {packageDetail?.description}
            </Typography>
            <Typography gutterBottom variant="body2" sx={{ lineHeight: 1.8 }}>
              {dummyContent}
            </Typography>
          </CardContent>
          <CardActions>
            <FlightIcon fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              {packageDetail?.departureFrom} - {packageDetail?.destination},{" "}
              {packageDetail?.destination} -{packageDetail?.departureFrom}
            </Typography>
          </CardActions>
        </ContainerBox>
      </Grid>

      <ItineraryCard title={`Starting from ${packageDetail?.priceStartFrom}KR`}>
        <CardContent>
          <TripItinerary packageDetail={packageDetail} />
        </CardContent>
        <Link href={linkToFlightOptions(packageDetail)}>
          <Button variant="contained" size="large" fullWidth>
            Start Planning
          </Button>
        </Link>
      </ItineraryCard>
    </Grid>
  );
}
