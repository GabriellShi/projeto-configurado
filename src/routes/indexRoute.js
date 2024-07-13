const express = require("express");
const router = express.Router();
// Controllers
const indexController = require("../controllers/IndexController");

// Rota para a página inicial
router.get("/", indexController.index);

module.exports = router;
