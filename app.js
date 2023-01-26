const express = require("express");
const app = express();
const port = 3000;
const items = require("./routes/items");

// middleware

app.use(express.json());

// routes
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use("/api/v1/items", items);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});