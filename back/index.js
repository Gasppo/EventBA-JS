const express = require("express");
const db = require("./queries.js");
const app = express();
const port = 5000;

//calls
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.status(200).send("Conexión");
  console.log("Conectado");
});

app.use("/static", express.static("public"));
app.get("/api/users", db.getUsers);
app.get("/api/events", db.getEvents);
app.get("/api/users/email/:email", db.getUserByEmail);
app.get("/api/users/id/:id", db.getUserById);
app.post("/api/users", db.registerUser);
app.post("/api/events", db.purchaseTicket);
app.post("/api/events/cancel", db.cancelTicket);
app.get("/api/events/:id", db.getPurchasedTicketsForUser);
app.listen(port, () => console.log(`Running on port ${port}`));
