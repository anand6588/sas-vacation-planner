import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DaysDropdown() {
  const [days, setDays] = React.useState(7);

  const handleChange = (event) => {
    setDays(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small">
      <Select
        id="demo-select-small"
        value={days}
        label="No. of Days"
        onChange={handleChange}
      >
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
