import { Typography } from "@mui/material";

export default function ItineraryTitle({ title }) {
  return (
    <Typography
      variant="h6"
      component={"div"}
      color="text.secondary"
      align={"left"}
      sx={{ m: "10px 0 -40px 0" }}
    >
      {title}
    </Typography>
  );
}
