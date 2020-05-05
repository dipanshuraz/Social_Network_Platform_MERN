const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
// @route  POST api/users
// @desc  Register User route
// @access Public
router.post("/", (req, res, next) => {
  console.log(req.body);
  res.send("Users Route");
});

module.exports = router;
