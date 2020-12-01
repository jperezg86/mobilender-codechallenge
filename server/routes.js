const express = require("express");
const router = express.Router();
const SoftwaresController = require("./controllers/softwares-controller");

router.get("/softwares", SoftwaresController.allSoftware);

module.exports = router;