import moment from "moment";

export default function formattedTimestamp(timestamp) {
  return moment(timestamp).format("MMMM Do YYYY, h:mm:ss a");
}
