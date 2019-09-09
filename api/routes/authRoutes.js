const { JWT_KEY } = require("../config/keys");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

module.exports = app => {
  app.post("/auth/google", (req, res) => {
    const token = jwt.sign(
      { id: req.body.googleId, name: req.body.name },
      JWT_KEY,
      {
        expiresIn: "1m"
      }
    );

    res.status(200).send({ isLogged: true, token: token });
  });

  app.post("/auth/create", (req, res) => {
    bcrypt.hash(res.password, salt, (err, hashedPassword) => {});
  });

  app.get("/auth/login", (req, res) => {
    const token = jwt.sign({ id: 1, name: "Guilherme Godoy" }, JWT_KEY, {
      expiresIn: "1m"
    });

    res.status(200).send({ isLogged: true, token: token });
  });

  app.get("/auth/checktoken", (req, res) => {
    const token = req.headers["authorization"];
    if (!token) {
      return res
        .status(401)
        .send({ isLogged: false, message: "No token provided." });
    }

    jwt.verify(token.split(" ")[1], JWT_KEY, (error, decoded) => {
      if (error) {
        return res
          .status(401)
          .send({ isLogged: false, message: "Failed to authorize.", error });
      }

      res.status(200).send();
    });
  });
};
