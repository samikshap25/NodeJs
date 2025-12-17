const router = require("express").Router();
const { Department } = require("../models");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

router.post("/", auth, role("admin", "superadmin"), async (req, res) => {
  const dept = await Department.create(req.body);
  res.json(dept);
});

module.exports = router;
