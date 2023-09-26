import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DaysDropdown({ days, handleDateChange }) {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small">
      <Select value={days} label="No. of Days" onChange={handleDateChange}>
        {Array.apply(0, Array(21)).map((v, i) => (
          <MenuItem value={i}>
            {i !== 0 && i} Day{i !== 1 && "s"}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
