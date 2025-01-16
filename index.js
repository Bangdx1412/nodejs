const express = require("express");

require("dotenv").config();
const route = require("./routes/client/index.route");
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
