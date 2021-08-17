const express           = require("express"),
      router            = express.Router(),
      authValidations = require("../validations/auth.validations"),
      authSchema        = require("../validatingSchema/authSchema"),
      authServices      = require("../services/authServices");



router.post("/login",authValidations(authSchema.loginSchema),authServices.login);
router.post("/register",authValidations(authSchema.registerSchema),authServices.register);
router.post("/logout",authValidations(authSchema.logoutSchema),authServices.logout);

//secured route
router.post("/secured",authValidations(authSchema.isloggedSchema),authServices.isLoggedIn);

module.exports = router;