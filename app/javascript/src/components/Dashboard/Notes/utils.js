import dayjs from "dayjs";

var relativeTime = require("dayjs/plugin/relativeTime");

dayjs.extend(relativeTime);

const requiredDateFormat = dateTime => dayjs(dateTime).format("dddd, hh:mm A");
const relativeCreationTime = dateTime => dayjs(dateTime).fromNow();

export { requiredDateFormat, relativeCreationTime };
