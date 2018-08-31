const router = require("express").Router();
const pokemonRoutes = require("./pokemon");

// Book routes
router.use("/pokemon", pokemonRoutes);

module.exports = router;
