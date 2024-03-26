const express = require("express");
const app = express();
const port = 3000;
   
app.get("/", (req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post();
