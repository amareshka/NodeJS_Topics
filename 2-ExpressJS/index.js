const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This is from Express JS..");
});

app.get("/about", (req, res) => {
  res.send("This is from About page..");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`We are listening to ${PORT}`));
