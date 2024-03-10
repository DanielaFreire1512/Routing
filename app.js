const express = require("express");
const app = express();
const port = 3000;

const routes = require("./route");


app.get("/", routes.homePageRoute);

app.get("/login", routes.loginPageRoute);

app.get("/register", routes.registerPageRoute);

app.use((req, res, next) => {
  res.status(404).send("Page not founded");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
