import dayjs from "dayjs";

export const calculateArrivalTime = (startDate, startTime, duration) => {
  let arrivalDate = new Date(startDate);
  const [hours, mins] = startTime.split(":");
  arrivalDate.setHours(parseInt(hours));
  arrivalDate.setMinutes(parseInt(mins) + duration);
  return dayjs(arrivalDate).format("HH:mm");
};

export const formatTravelDuration = (duration) => {
  const hours = duration / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  return rhours + " hrs " + (minutes > 1 ? Math.round(minutes) + " mins" : "");
};
