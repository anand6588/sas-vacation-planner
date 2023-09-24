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

export default function PackageItinerary() {
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
          <TimelineDot>
            <Flight />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="button"
            component="span"
            color={"text.secondary"}
          >
            Flight
          </Typography>
          <Typography color={"text.secondary"}>Stockholm - Dubai</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector />
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
          <TimelineConnector />
          <TimelineDot>
            <Flight />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography
            variant="button"
            component="span"
            color={"text.secondary"}
          >
            Flight
          </Typography>
          <Typography color={"text.secondary"}>Dubai - Stockholm</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
