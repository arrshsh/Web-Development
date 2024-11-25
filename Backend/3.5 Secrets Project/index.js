import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to verify password
function verifyPassword(req, res, next) {
  console.log(req.body);
  if (req.body["password"] === "ILoveProgramming") {
    next(); // Password is correct, proceed to the next function
  } else {
    res.sendFile(__dirname + "/public/index.html"); // Redirect to login page if password is incorrect
  }
}

// Route to serve the login page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Route to check password and serve the secret page if correct
app.post("/check", verifyPassword, (req, res) => {
  res.sendFile(__dirname + "/public/secret.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
