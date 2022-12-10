const PORT = 3444;
const NAME = "NodeJS Server 1";
const express = require("express");
const app = express();
app.route("/").all(async (req, res) => res.status(200).send(`<h1>Ok from ${NAME} port ${PORT}</h1>`));
app.listen(PORT, () => console.log(`${(new Date().toISOString())}, ${NAME}, Server is listening on port ${PORT}, (Express)`));