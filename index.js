const PORT = 3005;
const NAME = "NodeJS Server for React Built version";
const express = require("express");
const app = express();
const path = require('path');

//react project folder
const react_path = express.static(path.join(__dirname, 'server-side', 'react', 'dist'));
app.use(react_path);
app.use('/*', react_path);
app.use('/*/*', react_path);

//app.route("/").all(async (req, res) => res.status(200).send(`<h1>Ok from ${NAME} port ${PORT}</h1>`));
app.listen(PORT, () => console.log(`${(new Date().toISOString())}, ${NAME}, Server is listening on port ${PORT}, (Express)`));
