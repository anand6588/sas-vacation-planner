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
import dayjs from "dayjs";
import { formatTravelDuration } from "../utils/dateTimeUtils";

export default function TripItinerary({ outboundFlight, inboundFlight, days }) {
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
          <TimelineDot color="primary">
            <Flight />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "primary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          {outboundFlight ? (
            <>
              <Typography
                variant="button"
                component="span"
                color={"text.primary"}
              >
                {dayjs(outboundFlight?.date).format("MMM DD, YYYY")}{" "}
                {outboundFlight?.time}
              </Typography>
              <Typography variant="body2" color={"text.secondary"}>
                {outboundFlight?.departure} - {outboundFlight?.destination} (
                {formatTravelDuration(outboundFlight?.duration)})
              </Typography>
            </>
          ) : (
            <Typography variant="button" color={"text.secondary"}>
              No Fight selected for departure
            </Typography>
          )}
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
          <Typography color={"text.secondary"}>
            {days} Days in {outboundFlight?.destination}
          </Typography>
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
          {inboundFlight ? (
            <>
              <Typography
                variant="button"
                component="span"
                color={"text.primary"}
              >
                {dayjs(inboundFlight?.date).format("MMM DD, YYYY")}{" "}
                {inboundFlight?.time}
              </Typography>
              <Typography variant="body2" color={"text.secondary"}>
                {inboundFlight?.departure} - {inboundFlight?.destination} (
                {formatTravelDuration(inboundFlight?.duration)})
              </Typography>{" "}
            </>
          ) : (
            <Typography variant="button" color={"text.secondary"}>
              No Fight selected for your return
            </Typography>
          )}
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
