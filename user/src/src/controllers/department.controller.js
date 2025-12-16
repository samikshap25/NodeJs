const { Department, User } = require("../models");

async function createDepartment(req, res) {
  try {
    const { departmentName, userId } = req.body;

    const department = await Department.create({
      departmentName,
      userId,
    });

    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getAllDepartments(req, res) {
  try {
    const departments = await Department.findAll({
      include: [{ model: User }],
    });

    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createDepartment,
  getAllDepartments,
};
