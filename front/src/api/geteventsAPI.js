import { API_SERVER } from "../constants";
export default function getEventsAPI() {
  return fetch(`http://${API_SERVER}:5000/api/events`)
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}
