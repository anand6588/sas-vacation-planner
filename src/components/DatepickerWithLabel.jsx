import { Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export default function DatepickerWithLabel({ label, value, handleDateChange }) {
  return (
    <>
      <Typography gutterBottom variant="h5" component="span">
        {label}
      </Typography>
      <DatePicker
        value={value}
        onChange={(e) => handleDateChange(e)}
        sx={{ mt: "-10px", ml: "5px" }}
      />
    </>
  );
}
