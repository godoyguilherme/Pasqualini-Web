const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// const db = require("./config/db");
// db.authenticate();

require("./routes/authRoutes")(app);

app.listen(5000);
