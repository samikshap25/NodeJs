// src/controllers/user.controller.js

const getUsers = (req, res) => {
  res.json({ message: "All users (admin/superadmin only)" });
};

const getMyProfile = (req, res) => {
  res.json({
    message: "My profile",
    user: req.user
  });
};

module.exports = {
  getUsers,
  getMyProfile
};
