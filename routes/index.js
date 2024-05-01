const express = require('express');
const router = express.Router();

const todo = require('./todo.routes');
const user = require("./user.routes");

router.get("/status", (_, res) => res.status(200).json({ status: "OK" }));

router.use('/api/todo', todo);
router.use("/auth", user);

module.exports = router;