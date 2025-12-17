const { User, Department, JobRole, Salary } = require("../models");

exports.getUsers = async (req, res) => {
  const users = await User.findAll({
    include: [Department, JobRole, Salary]
  });
  res.json(users);
};

exports.getMyProfile = async (req, res) => {
  const user = await User.findByPk(req.user.id, {
    include: [Department, JobRole, Salary]
  });
  res.json(user);
};
