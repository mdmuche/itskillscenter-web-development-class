// import fs from "fs";
// import _ from "lodash";
// import add from "./math.js";

// fs.writeFileSync("note.txt", "Hello md");
// console.log(add(3, 4));
// const arr = [1, 2, 3, 4, 5];
// console.log(_.shuffle(arr));
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "welcome to home page" });
});
app.listen(port, () => {
  console.log("listening to request at port: " + port);
});
