import dayjs from "dayjs";

export const dateTimeFormatter = date => dayjs(date).format("dddd, hh:mm A");

export const relativeCreationTime = date => dayjs(date).fromNow();
