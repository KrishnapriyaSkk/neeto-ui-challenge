import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const dateTimeFormatter = dateTime => dayjs(dateTime).format("dddd, hh:mm A");
const relativeCreationTime = dateTime => dayjs(dateTime).fromNow();

export { dateTimeFormatter, relativeCreationTime };
