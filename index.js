const express = require("express");
// Nhung file env
// để dùng được thằng env thì dùng process.env.Tênbiến;
require("dotenv").config();
const database = require("./config/database");
const route = require("./routes/client/index.route");
database.connect();
const app = express();
const port = process.env.PORT;

app.use(express.static("public")); // Nhúng giao diện tĩnh

app.set("views", "./views");
app.set("view engine", "pug");

// Route
route(app);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
