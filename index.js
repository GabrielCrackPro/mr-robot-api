const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const Joi = require("joi");
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

app.get("/", (req, res) => {
  res.set(responseHeaders);
  res.send(data.details);
});

app.get("/characters", (req, res) => {
  res.set(responseHeaders);
  res.send(data.characters);
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
