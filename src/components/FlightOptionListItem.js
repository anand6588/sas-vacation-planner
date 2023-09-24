import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Button, Grid, Stack, Typography } from "@mui/material";

export default function FlightOptionListItem() {
  return (
    <Grid item xs={3} md={12}>
      <Grid
        container
        spacing={2}
      >
        <Grid item xs={3} md={1}>
          <Avatar
            sx={{
              bgcolor: "#0103bd",
              fontSize: "13px",
              fontStyle: "italic",
            }}
          >
            SAS
          </Avatar>
        </Grid>
        <Grid item xs={6} md={3}>
          <Stack>
            <Typography
              variant="button"
              component={"div"}
              color="text.secondary"
            >
              Jan 9, 2024{" "}
            </Typography>
            <Typography
              variant="body2"
              component={"div"}
              color="text.secondary"
            >
              09:00 - 14:30{" "}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} md={5}>
          <Stack>
            <Typography
              variant="button"
              component={"div"}
              color="text.secondary"
            >
              ARN - DXB{" "}
            </Typography>
            <Typography
              variant="body2"
              component={"div"}
              color="text.secondary"
            >
              07Hrs{" "}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} md={3}>
          <Button variant="contained" size="medium">
            <Stack>
              <Typography variant="caption">Select </Typography>
              <Typography variant="button">12500KR </Typography>
            </Stack>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
