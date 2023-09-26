import { Typography } from "@mui/material";

export default function NoResultMessage({ children }) {
  return (
    <Typography
      variant="body2"
      component={"div"}
      color="text.secondary"
      sx={{ m: "50px" }}
    >
      {children}
    </Typography>
  );
}
