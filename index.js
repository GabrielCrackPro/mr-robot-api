const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const data = {
  details: require("./api/data/details.json"),
  characters: require("./api/data/characters.json"),
};

const corsOptions = {
  origin: "*",
};

const app = express();

app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  res.send(data.details);
});

app.get("/characters", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  res.send(data.characters);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
