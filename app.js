const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // ODM
const fileRoutes = require("./routes/file.route");
var multer = require("multer");

const app = express();
const port = 3001;

/* middlewares */
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use("/file", fileRoutes);

/* DB Connection */

mongoose
  .connect("mongodb://localhost:27017/file")
  .then((res) => {
    console.log("Db Connected : mongodb://localhost:27017/file...");
  })
  .catch((err) => {
    console.log("DB ERR: ", err);
  });

/* End DB Conn. */

/* server listen */
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
