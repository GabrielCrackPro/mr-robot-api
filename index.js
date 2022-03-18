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
const responseHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  "Cross-Origin-Resource-Policy": "cross-origin",
};
const app = express();

app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// GET Routes

app.get("/", (req, res) => {
  res.set(responseHeaders);
  res.send(data.details);
});

app.get("/characters", (req, res) => {
  res.set(responseHeaders);
  res.send(data.characters);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
