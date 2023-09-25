const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
const db = require("./models");

// Routers
const oltRouter = require("./routes/Olts");
app.use("/olts",oltRouter);

const sitesRouter = require("./routes/Sites");
app.use("/sites", sitesRouter);
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);
const fdtsRouter = require("./routes/Fdts");
app.use("/fdts", fdtsRouter);
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});