const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/Add", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const Sum = a + b;
  res.send(Sum.toString());
});
app.listen(3000);
