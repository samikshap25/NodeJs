const db = require("../models");
const Department = db.Department;

exports.createDepartment = async (req, res) => {
  try {
    const dept = await Department.create(req.body);
    res.status(201).json(dept);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDepartments = async (req, res) => {
  const depts = await Department.findAll();
  res.json(depts);
};
