const express = require("express");

const app = express();

app.get("/", (req, res, next) => res.status(202));

app.listen(5000, () => console.log("Listening"));
