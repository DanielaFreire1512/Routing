function homePageRoute(req, res) {
  res.send("Home Page!");
}

function loginPageRoute(req, res) {
  res.send("Login Page!");
}

function registerPageRoute(req, res) {
  res.send("Register Page!");
}

module.exports = {
  homePageRoute,
  loginPageRoute,
  registerPageRoute,
};

// const rotas = {
//     homePageRoute: homePageRoute,
//     loginPageRoute: loginPageRoute,
//     registerPageRoute: registerPageRoute
// }

// const age = 36

// const pessoa = {
//     name: "Thulio",
//     gender: "M",
//     email: "a@a.com",
//     age
// }
