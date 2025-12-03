import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import path from "path";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const log = fs.createWriteStream(path.join(__dirname, "log.txt"), {
  flag: "a",
});

const app = express();
const port = 3000;
app.use(morgan("combined", { stream: log }));
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  let name = req.body.name;
  let lastname = req.body.lastnamename;
  res.status(200).send(`hellow ${name}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
