import { API_SERVER } from "../constants";

export default function purchaseTicketAPI(userid, eventid) {
  console.log(userid);
  return fetch(`http://${API_SERVER}:5000/api/events`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      userid: userid,
      eventid: eventid,
    }),
  })
    .then((res) => res.json())
    .then((json) => {})
    .catch((err) => console.log(""));
}
