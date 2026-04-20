import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import conDb from "./db/ConnectDb.js";

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//not found page
app.use((req, res, next) => {
  res.status(404).send({ message: "Page not found" });
});

conDb(() => {
  app.listen(port, (req, res) => {
    console.log("Listening to request at port " + port);
  });
});
