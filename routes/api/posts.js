const express = require("express");
const router = express.Router();

// @route  GET api/posts
// @desc  Posts route
// @access Public
router.get("/", (req, res, next) => res.send("Posts Route"));

module.exports = router;
