const express = require("express");
const app = express();
// const port = 3000;
const items = require("./routes/items");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

// middleware

app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/items", items);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
