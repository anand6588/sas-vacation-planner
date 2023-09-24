import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import HotelIcon from "@mui/icons-material/Hotel";
import Typography from "@mui/material/Typography";
import { Flight } from "@mui/icons-material";

export default function TripItinerary() {
  return (
    <Timeline
      position="right"
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" >
            <Flight />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "primary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="button" component="span" color={"text.primary"}>
            Oct 10, 2023 09:00
          </Typography>
          <Typography variant="body2" color={"text.secondary"}>
            Stockholm ARN (7hrs)
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "primary.main" }} />
          <TimelineDot variant="outlined" color="primary">
            <HotelIcon color="primary" />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "primary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="button"
            component="span"
            color={"text.secondary"}
          >
            Stay
          </Typography>
          <Typography color={"text.secondary"}>7 Days in Dubai</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "primary.main" }} />
          <TimelineDot color="primary">
            <Flight />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="button" component="span" color={"text.primary"}>
            Oct 16, 2023 14:00
          </Typography>
          <Typography variant="body2" color={"text.secondary"}>
            Dubai DXB (6hrs)
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
