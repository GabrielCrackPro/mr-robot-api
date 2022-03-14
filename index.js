const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const data = {
    names: require("./data/names.json"),
}

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

const port = process.env.PORT || 3000;

app.get('/names', (req, res) => {
    res.send(data);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})