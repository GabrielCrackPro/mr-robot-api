const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const Joi = require("joi");
const data = {
  details: require("./api/data/details.json"),
  characters: require("./api/data/characters.json"),
  episodes: require("./api/data/episodes.json"),
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

const schemas = {
  characters: Joi.object().keys({
    name: Joi.string().required(),
    role: Joi.string().required(),
    image: Joi.string().uri().required(),
    social: Joi.object().keys({
      twitter: Joi.string().uri(),
      facebook: Joi.string().uri(),
      instagram: Joi.string().uri(),
    }),
  }),
};

// GET Routes

// Get series details
app.get("/", (req, res) => {
  res.set(responseHeaders);
  res.send(data.details);
});
// Get all characters
app.get("/characters", (req, res) => {
  res.set(responseHeaders);
  res.send(data.characters);
});
// Get characters by id
app.get("/characters/:id", (req, res) => {
  const id = req.url.split("/")[2];
  const character = data.characters[0].main[id - 1];
  if (character) {
    res.set(responseHeaders);
    res.send(character);
  } else {
    res.status(404).send({ error: "Character not found" });
  }
});
// Get all seasons
app.get("/seasons", (req, res) => {
  res.set(responseHeaders);
  res.send(data.episodes[0].overview);
});
// Get a season by id
app.get("/seasons/:id", (req, res) => {
  const id = req.url.split("/")[2];
  const season = data.episodes[0].overview["season_" + id];
  if (season) {
    res.set(responseHeaders);
    res.send(season);
  } else {
    res.status(404).send({ error: "Season not found" });
  }
});
// Get all episodes
app.get("/episodes", (req, res) => {
  res.set(responseHeaders);
  res.send(data.episodes);
});
// Get episodes by number of episode in the season
app.get("/episodes/:no_season/:no_in_season", (req, res) => {
  const season = "season_" + req.url.split("/")[2];
  const episode = req.url.split("/")[3];
  const episodeData = data.episodes[0][season][episode - 1];
  if (episodeData) {
    res.set(responseHeaders);
    res.send(episodeData);
  } else {
    res.status(404).send({ error: "Episode not found" });
  }
});
// POST Routes

app.post("/characters/new", (req, res) => {
  const newCharacter = req.body;
  res.set(responseHeaders);
  schemas.characters.validate(newCharacter, (err, value) => {
    if (err) {
      res.status(400).send(err);
    } else {
      data.characters.push(newCharacter);
      fs.writeFile("./api/data/characters.json", JSON.stringify(newCharacter));
      res.send(data.characters);
      console.log(newCharacter);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
