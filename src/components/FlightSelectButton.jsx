import { Button, Stack, Typography } from "@mui/material";
import * as React from "react";

export default function FlightSelectButton({
  disabled = false,
  onClickHandler = (e) => {},
  showCaption = true,
  btnCaption,
  value,
}) {
  return (
    <Button
      variant="contained"
      size="large"
      disabled={disabled}
      onClick={onClickHandler}
    >
      <Stack>
        {showCaption && (
          <Typography variant="caption">{btnCaption} </Typography>
        )}
        <Typography variant="button">{value} </Typography>
      </Stack>
    </Button>
  );
}
