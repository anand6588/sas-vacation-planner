import { Box, Grid, Stack, styled } from "@mui/material";
import ItineraryTitle from "./ItineraryTitle";

export const ContainerBox = styled(Box)(({ theme }) => ({
  backgroundColor: "primary.dark",
  border: "solid 1px #ddd",
  padding: "10px",
}));

export default function ItineraryCard({ title, children }) {
  return (
    <Grid item xs={4}>
      <ContainerBox>
        <Stack alignContent={"center"}>
          <ItineraryTitle title={title} />
          {children}
        </Stack>
      </ContainerBox>
    </Grid>
  );
}
