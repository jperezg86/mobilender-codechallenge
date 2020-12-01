const express = require("express");
const router = express.Router();
const SoftwaresController = require("./controllers/softwares-controller");
const CreditosGrupales = require("./controllers/creditos-grupales-controller");

router.get("/softwares", SoftwaresController.allSoftware)
router.get('/creditos-grupales', CreditosGrupales.allCreditos)
router.get('/cambios/:id', CreditosGrupales.getCambios)

module.exports = router;