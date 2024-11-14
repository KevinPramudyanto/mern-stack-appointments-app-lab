require("dotenv").config();
const express = require("express");
const cors = require("cors");
const appointments = require("./routers/appointments");
const connectDB = require("./db/db");

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", appointments);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
