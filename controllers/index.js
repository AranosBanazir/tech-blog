const router = require("express").Router();
const apiRoutes = require("./api");
const login = require("./login");
const viewRoutes = require("./view-routes");

router.use("/login", login);
router.use("/api", apiRoutes);
router.use("/", viewRoutes);

module.exports = router;
