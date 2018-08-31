const router = require("express").Router();
const pokemonController = require("../../controllers/pokemonController");

// Matches with "/api/pokemon"
router.route("/")

// Matches with "/api/pokemon/:id"
router.route("/:id")

module.exports = router;
