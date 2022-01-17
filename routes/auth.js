const express = require("express");
const {Register, Login}=require("../controllers/auth.controller")
const isAuth = require("../middlewares/isAuth");


const router = express.Router();

const {
    registerValidation,
    validation,
    loginValidation,
  } = require("../middlewares/userValidation");

// Register==Signup ==Create account
router.post("/register", registerValidation(), validation(), Register);

// Login==signin
router.post("/login", loginValidation(), validation(), Login);

router.get("/current", isAuth(), (req, res) => {
    res.send({ user: req.user });
  });



module.exports = router;




