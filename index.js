const express = require("express");
require("dotenv/config");

const blogRoutes = require("./routes/blogsRoutes");
const connectDB = require("./db");
connectDB();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/", blogRoutes);

app.listen(PORT, (error) => {
  if (!error) console.log("Listening on port " + PORT);
  else console.log("Error occurred, server can't start", error);
});
