import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`listening for request at port: ${port}`);
});
