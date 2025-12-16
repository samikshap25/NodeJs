const express = require("express");
const router = express.Router();

const {
  createDepartment,
  getDepartments
} = require("../controllers/department.controller");

const { authenticate } = require("../middleware/auth.middleware");
const { authorize } = require("../middleware/role.middleware");

router.post(
  "/",
  authenticate,
  authorize("admin", "superadmin"),
  createDepartment
);

router.get("/", authenticate, getDepartments);

module.exports = router;
