import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.set("view engine", "ejs"); // Set EJS as the view engine

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const data = {
    fName: "",
    lName: "",
  };
  res.render("index", data); // Pass data to the EJS template
});

app.post("/submit", (req, res) => {
  const fName = req.body.fName || "";
  const lName = req.body.lName || "";
  const data = { fName, lName };
  res.render("index", data); // Pass data to the EJS template
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
