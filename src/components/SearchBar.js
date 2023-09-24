import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Slider,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import DaysDropdown from "./DaysDropdown";

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value * 1000}>
      {children}
    </Tooltip>
  );
}

export default function SearchBar() {
  const [value, setValue] = React.useState([5, 50]);
  const [displayValue, setDisplayValue] = React.useState([
    value[0] * 1000,
    value[1] * 1000,
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setDisplayValue([newValue[0] * 1000, newValue[1] * 1000]);
  };

  return (
    <Grid container spacing={2} justifyContent={"center"}>
      <Grid item xs={8}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search location"
            inputProps={{ "aria-label": "Search for vacation packages" }}
          />

          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

          <DaysDropdown />

          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Stack direction={"row"}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Price Range"
            />
          </FormGroup>

          <Box sx={{ width: "70%", marginTop: "10px" }}>
            <Typography align="center" variant="button" component={"div"}>
              {displayValue[0]}Kr - {displayValue[1]}Kr
            </Typography>
            <Slider
              valueLabelDisplay="auto"
              slots={{
                valueLabel: ValueLabelComponent,
              }}
              onChange={handleChange}
              value={value}
            />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
