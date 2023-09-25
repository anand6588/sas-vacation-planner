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
import { styled } from "@mui/material";

const TextSecondary = ({ children }) => (
  <Typography variant="button" component="span" color={"text.secondary"}>
    {children}
  </Typography>
);

const StyledTimelineContent = styled(TimelineContent)(({ theme }) => ({
  py: "12px",
  px: 2,
}));

export default function PackageItinerary({ packageDetail }) {
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
        <StyledTimelineContent>
          <TextSecondary>Flight</TextSecondary>
          <Typography color={"text.secondary"}>
            {packageDetail.departureFrom} - {packageDetail.destination}
          </Typography>
        </StyledTimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <StyledTimelineContent>
          <TextSecondary>Stay</TextSecondary>
          <Typography color={"text.secondary"}>
            {packageDetail.days} Days in {packageDetail.destination}
          </Typography>
        </StyledTimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <Flight />
          </TimelineDot>
        </TimelineSeparator>
        <StyledTimelineContent>
          <TextSecondary>Flight</TextSecondary>
          <Typography color={"text.secondary"}>
            {packageDetail.destination} - {packageDetail.departureFrom}
          </Typography>
        </StyledTimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
