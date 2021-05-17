import { API_SERVER } from "../constants";

export default function registerAPI(username, email, password) {
  return fetch(`http://${API_SERVER}:5000/api/users`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    })
    .catch((err) => console.log(err));
}
