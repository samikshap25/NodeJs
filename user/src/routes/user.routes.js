const router = require("express").Router();
const userCtrl = require("../controllers/user.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

router.get("/me", auth, userCtrl.getMyProfile);
router.get("/", auth, role("admin", "superadmin"), userCtrl.getUsers);

module.exports = router;
