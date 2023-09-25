import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DaysDropdown({ days, handleDateChange }) {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small">
      <Select value={days} label="No. of Days" onChange={handleDateChange}>
        <MenuItem value={0}>Days</MenuItem>
        <MenuItem value={1}>1 Day</MenuItem>
        <MenuItem value={2}>2 Days</MenuItem>
        <MenuItem value={3}>3 Days</MenuItem>
        <MenuItem value={4}>4 Days</MenuItem>
        <MenuItem value={5}>5 Days</MenuItem>
        <MenuItem value={6}>6 Days</MenuItem>
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={8}>8 Days</MenuItem>
        <MenuItem value={9}>9 Days</MenuItem>
        <MenuItem value={10}>10 Days</MenuItem>
        <MenuItem value={11}>11 Days</MenuItem>
        <MenuItem value={12}>12 Days</MenuItem>
        <MenuItem value={13}>13 Days</MenuItem>
        <MenuItem value={14}>14 Days</MenuItem>
        <MenuItem value={15}>15 Days</MenuItem>
      </Select>
    </FormControl>
  );
}
