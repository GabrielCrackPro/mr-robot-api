const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        message: "Hello World"
    });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})