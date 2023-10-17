const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const register = require("./routes/register")
const login = require("./routes/login")
const dotenv = require("dotenv")

// DOTENV CONFIG
dotenv.config({path: "./config.env"})
const DB = process.env.DATABASE

// DATABASE CONNECTION
mongoose
  .connect(DB)
  .then(() => console.log("Database connected successfully..."))
  .catch((err) => console.log("Could not connect to the database...", err))


// MIDDLEWARE FUNCTIONS
app.use(express.json())
app.use(cors())
app.use("/api/register", register)
app.use("/api/login", login)


app.listen(3000, () => console.log("Server is listening or port 3000...") )