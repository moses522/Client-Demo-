import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
express().use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, "public")));
=======
>>>>>>> d3f751c9313aec78823d3e9096a8e38d43571ff1

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>You</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
