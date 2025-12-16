// src/routes/user.routes.js

const express = require("express");
const router = express.Router();

const { getUsers, getMyProfile } = require("../controllers/user.controller");
const { authenticate } = require("../middleware/auth.middleware");
const { authorize } = require("../middleware/role.middleware");

// superadmin/admin → view all users
router.get(
  "/",
  authenticate,
  authorize("admin", "superadmin"),
  getUsers
);

// logged-in user → own profile
router.get(
  "/me",
  authenticate,
  getMyProfile
);

module.exports = router;
