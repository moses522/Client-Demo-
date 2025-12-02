import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var Name = "";
app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ extended: true }));

function NameGenerator(req, res, next) {
  console.log(req.body);
  Name = req.body["first"] + req.body["pet"];
  next();
}

app.use(NameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>You</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
