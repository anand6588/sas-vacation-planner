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
  styled,
} from "@mui/material";
import DaysDropdown from "./DaysDropdown";
import { useState } from "react";

const SearchBox = styled(Paper)(({ theme }) => ({
  p: "2px 4px",
  display: "flex",
  alignItems: "center",
}));

const filterToSliderValue = (value) => value / 1000;
const sliderToFilterValue = (value) => value * 1000;

const ValueLabelComponent = (props) => {
  const { children, value } = props;

  return (
    <Tooltip
      enterTouchDelay={0}
      placement="top"
      title={sliderToFilterValue(value)}
    >
      {children}
    </Tooltip>
  );
};

export default function SearchBar({ filters, setFilters }) {
  const [value, setValue] = useState([
    filterToSliderValue(filters.priceRangeMin),
    filterToSliderValue(filters.priceRangeMax),
  ]);

  const setPriceRangeFilter = (value) => {
    setFilters({
      ...filters,
      priceRangeMin: sliderToFilterValue(value[0]),
      priceRangeMax: sliderToFilterValue(value[1]),
    });
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={2} justifyContent={"center"}>
      <Grid item xs={8}>
        <SearchBox component="form">
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search location"
            inputProps={{ "aria-label": "Search for vacation packages" }}
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <DaysDropdown
            days={filters.days}
            handleDateChange={(e) =>
              setFilters({ ...filters, days: e.target.value })
            }
          />

          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </SearchBox>
      </Grid>
      <Grid item xs={8}>
        <Stack direction={"row"}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters.priceRange}
                  onChange={(e) => {
                    setFilters({ ...filters, priceRange: e.target.checked });
                  }}
                />
              }
              label="Price Range"
            />
          </FormGroup>
          <Box sx={{ width: "70%", marginTop: "10px" }}>
            <Typography
              align="center"
              variant="button"
              component={"div"}
              color={!filters.priceRange ? "text.secondary" : "text.primary"}
            >
              {filters.priceRangeMin} Kr - {filters.priceRangeMax} Kr
            </Typography>
            <Slider
              onChangeCommitted={(e, value) => setPriceRangeFilter(value)}
              disabled={!filters.priceRange}
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
