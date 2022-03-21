const express = require("express");
const { PORT } = require("./settings");

const indexRouter = require("./routes/index");

const app = express();

app.use("/", indexRouter);

app.listen(PORT, (req, res) => {
  console.log(`Started express server on PORT: ${PORT}`);
});
