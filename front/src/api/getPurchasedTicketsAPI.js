import { API_SERVER } from "../constants";
export default function getPurchasedTicketsAPI(userid) {
  return fetch(`http://${API_SERVER}:5000/api/events/${userid}`)
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}
