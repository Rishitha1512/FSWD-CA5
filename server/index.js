const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")

dotenv.config();
const app = express();
app.use(cors())

app.use(express.json());

const NoteRoutes = require("./routes/noteRoutes")

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
 
app.use("/notes",NoteRoutes)

port = 5000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});