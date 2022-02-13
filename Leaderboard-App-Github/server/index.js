const players = require("./routes/players");
const database = require("./db")
const cors = require("cors");
const express = require("express");
const app = express();

database();
app.use(express.json());
app.use(cors());
app.use("/api/players", players);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening to ${port}...`));