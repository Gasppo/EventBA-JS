import { API_SERVER } from "../constants";

export default function loginAPI(email) {
  return fetch(`http://${API_SERVER}:5000/api/users/email/${email}`)
    .then((res) => res.json())
    .then((json) => {
      return json[0];
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}
