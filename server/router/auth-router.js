const express = require("express");
const router = express.Router();
const authcontrollers = require("../controller/auth-controller");
const { signupSchema, loginSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/").get(authcontrollers.home);

router.route("/register").post(validate(signupSchema), authcontrollers.register);
router.route("/login").post(validate(loginSchema), authcontrollers.login);

// Fetch user profile
router.route("/profile").get(authMiddleware, authcontrollers.getProfile);

router.route("/user").get(authMiddleware, authcontrollers.user);

module.exports = router;
