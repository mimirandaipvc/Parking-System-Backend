const EstacionamentoController = require("../controllers/EstacionamentoController.js");

const router = require("express").Router();

router.post("/iniciarParque", EstacionamentoController.iniciarParquimetro);

// router.post("/renovarParque", EstacionamentoController.getMatriculaUtilizador);

// router.post("/concluirParque", EstacionamentoController.getMatriculaUtilizador);

module.exports = router;
