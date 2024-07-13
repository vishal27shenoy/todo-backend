require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");
const { connection } = require("./config/dbConfig");
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());

app.use("/user", require("./routes/user.route"));
app.use("/todo",require("./routes/user.route"));


connection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
